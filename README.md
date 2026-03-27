# BMSCE Website

A modern, multi-page website for **B.M.S. College of Engineering (BMSCE)** with:

- modular, component-based frontend pages
- premium placements and department detail experiences
- virtual campus tour page
- floating AI assistant chat widget
- contact form with MongoDB storage and email notifications

---

## Tech Stack

### Frontend
- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Reusable HTML components loaded dynamically

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Nodemailer (Gmail SMTP)
- CORS + dotenv

### AI Integration
- Groq Chat Completions API (`llama-3.3-70b-versatile`)

---

## Features

- **Reusable layout components** (`navbar`, `footer`, `hero`, sections)
- **Rich home page** with section mounts and dynamic component loading
- **Dedicated placements page** with leadership details and statistics sections
- **Department details page** with expanded department data sets
- **Virtual tour page** for campus exploration UI
- **Floating chatbot assistant** available across pages
- **Contact page** with:
  - frontend validation
  - backend persistence to MongoDB
  - admin notification email
  - automated acknowledgement email to user

---

## Project Structure

```text
.
├── index.html
├── about.html
├── placements.html
├── virtual-tour.html
├── department-details.html
├── contact.html
├── server.js
├── package.json
├── assets/
│   ├── css/
│   ├── js/
│   │   ├── components.js
│   │   ├── chatbot.js
│   │   ├── contact.js
│   │   ├── department-details.js
│   │   ├── departments-data-1.js
│   │   └── departments-data-2.js
│   ├── hero/
│   ├── logo/
│   └── departments/
└── components/
    ├── navbar.html
    ├── footer.html
    ├── hero.html
    ├── placements.html
    ├── departments.html
    ├── stats.html
    ├── testimonials.html
    ├── news-events.html
    └── vision-mission.html
```

---

## Local Setup

### 1) Clone repository

```bash
git clone https://github.com/gpranit16/bms.git
cd bms
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create `.env`

Create a `.env` file in the project root:

```dotenv
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
PORT=5601
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

> Use a **Gmail App Password** for `EMAIL_PASS` (not your Gmail login password).

### 4) Run server

```bash
npm start
```

App runs on:

- `http://localhost:5601`

---

## API Endpoints

### Health
- `GET /api/health`
- returns service health JSON

### Chat
- `POST /api/chat`
- body:

```json
{
  "message": "Tell me about BMSCE placements",
  "page": "/placements.html"
}
```

### Contact
- `POST /api/contact`
- body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message"
}
```

Saves record to MongoDB and sends:
- admin notification email
- user acknowledgement email

---

## Deployment Guide

## Backend (Render)

1. Create a new **Web Service** from this repo.
2. Set:
   - Build command: `npm install`
   - Start command: `node server.js`
3. Add environment variables in Render:
   - `MONGODB_URI`
   - `GROQ_API_KEY`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT` (optional)
4. Deploy and verify:
   - `https://<render-service>/api/health`

## Frontend (Vercel)

1. Import the same repo in Vercel.
2. Framework preset: **Other**
3. No build command required for this static setup.
4. Deploy.

### Current API base behavior

In frontend scripts (`assets/js/chatbot.js`, `assets/js/contact.js`):
- localhost uses `http://127.0.0.1:5601`
- production uses hardcoded Render URL `https://bms-s9o7.onrender.com`

If your Render URL changes, update those files and redeploy Vercel.

---

## Troubleshooting

### `Cannot POST /api/contact`
- confirm backend is running
- confirm you are hitting the correct backend URL
- check deployed service logs on Render

### `EMAIL_USER or EMAIL_PASS missing in environment`
- add both variables in Render
- redeploy/restart service

### Chat not responding
- verify `GROQ_API_KEY` is set correctly
- verify `/api/health` is reachable
- check CORS/network errors in browser console

### Mongo not saving data
- verify `MONGODB_URI`
- check MongoDB network access and user permissions

---

## Security Notes

- Never commit `.env` to git.
- Rotate API keys and app passwords if exposed.
- Prefer separate credentials for development and production.

---

## License

This project is for educational/institutional website development use. Add a formal license if required by your organization.
