require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5501;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

const mongoUri = process.env.MONGODB_URI;

let ChatLog;

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
        ChatLog = mongoose.models.ChatLog || mongoose.model('ChatLog', chatSchema);
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
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

connectMongo().finally(() => {
    app.listen(PORT, () => {
        console.log(`BMSCE site running at http://localhost:${PORT}`);
    });
});
