const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5501;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

const mongoUri = process.env.MONGODB_URI;

let ChatLog;
let Contact;

async function connectMongo() {
    if (!mongoUri) {
        console.warn('MONGODB_URI not set. Chat logs will not be saved.');
        return;
    }

    try {
        await mongoose.connect(mongoUri);
        const chatSchema = new mongoose.Schema(
            {
                message: { type: String, required: true },
                reply: { type: String, required: true },
                page: { type: String, default: '/' }
            },
            { timestamps: true }
        );

        const contactSchema = new mongoose.Schema(
            {
                name: { type: String, required: true, trim: true },
                email: { type: String, required: true, trim: true, lowercase: true },
                message: { type: String, required: true, trim: true }
            },
            { timestamps: true, collection: 'contacts' }
        );

        ChatLog = mongoose.models.ChatLog || mongoose.model('ChatLog', chatSchema);
        Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const systemPrompt = `You are BMSCE Assistant for B.M.S. College of Engineering, Bengaluru.
Answer only about BMSCE website content, admissions-related directions, placements, departments, campus life, and navigation help.
Be concise, friendly, and accurate.
If the user asks something outside BMSCE context, politely redirect to BMSCE-related help.
Use plain text and short paragraphs.`;

app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'bmsce-chat-assistant' });
});

app.post('/api/chat', async (req, res) => {
    const { message, page } = req.body || {};

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required.' });
    }

    if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: 'GROQ_API_KEY is missing in .env' });
    }

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                temperature: 0.2,
                max_tokens: 450,
                messages: [
                    { role: 'system', content: systemPrompt },
                    {
                        role: 'system',
                        content: `Current page: ${page || '/'}\nSite sections include Home, About, Departments, Placements, Virtual Tour, News, and Contact.`
                    },
                    { role: 'user', content: message }
                ]
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(502).json({ error: `Groq API error: ${errText}` });
        }

        const data = await response.json();
        const reply =
            data?.choices?.[0]?.message?.content?.trim() ||
            'Sorry, I could not generate a response right now.';

        if (ChatLog) {
            try {
                await ChatLog.create({ message, reply, page: page || '/' });
            } catch (dbErr) {
                console.warn('Chat log save failed:', dbErr.message);
            }
        }

        return res.json({ reply });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Unexpected server error' });
    }
});

app.post('/api/contact', async (req, res) => {
    const name = req.body?.name?.trim();
    const email = req.body?.email?.trim();
    const message = req.body?.message?.trim();

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (!Contact) {
        return res.status(500).json({ error: 'Database is not connected. Please try again later.' });
    }

    try {
        await Contact.create({ name, email, message });

        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            return res.status(500).json({ error: 'EMAIL_USER or EMAIL_PASS missing in environment.' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        await transporter.sendMail({
            from: `BMSCE Website <${emailUser}>`,
            to: emailUser,
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `
        });

        await transporter.sendMail({
            from: `BMSCE Admissions <${emailUser}>`,
            to: email,
            subject: 'Thanks for contacting us',
            text: `Hi ${name},\n\nWe received your query and will contact you soon.\n\nRegards,\nBMSCE Team`
        });

        return res.status(200).json({ success: true, message: 'Your message was submitted successfully.' });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Unable to process contact request.' });
    }
});

connectMongo().finally(() => {
    app.listen(PORT, () => {
        console.log(`BMSCE site running at http://localhost:${PORT}`);
    });
});
