# AYUSH Startup Registration Portal 🚀

This project is developed as part of the **Smart India Hackathon (SIH) 2024** initiative under the **Ministry of AYUSH**, focusing on real-world problems in the startup ecosystem related to Ayurveda, Yoga, Unani, Siddha, and Homeopathy.

The **AYUSH Startup Registration Portal** aims to provide a unified digital platform for individuals and startups to register, submit ideas, access government benefits, and receive assistance through AI-powered tools.

---

## 🧠 Problem Statement

In India, AYUSH-based startups lack a centralized platform where they can:
- Easily register with the Ministry of AYUSH
- Get access to relevant schemes and support
- Submit innovative proposals
- Communicate with relevant departments in real time

This project addresses these challenges by providing a **secure, AI-assisted, and streamlined portal**.

---

## 🌟 Features

### 👥 Authentication
- Manual Signup/Login
- Google Sign-In Integration (OAuth 2.0)

### 📝 User Roles & Registration
- **Three Signup Options:**
  - Register a Startup
  - Register for Government AYUSH Benefits
  - Submit a Startup/Innovation Idea
- Post-signup, users are redirected to a **dynamic dashboard** to manage their submissions and documents.

### 📩 Admin Notifications
- When a user signs up (for any of the 3 purposes), the **admin receives an automatic email notification** with user info and intent.

### 🤖 AI-Powered Chatbot
- Integrated a **Free Natural Language Processing (NLP)** API chatbot.
- Assists users in navigating the site, answering FAQs, and completing registrations.

### 📂 Document Uploads
- Users can upload documents (like Aadhaar, pitch deck, registration certificate).
- Documents are stored securely using **MongoDB GridFS**.

### 💬 Feedback System
- Users can submit suggestions or issues.
- Feedback is directly **emailed to the admin** in real time.

---
## Screenshots 




## 🔐 Future Scope

- **Real-Time Tracking System:** Live status monitoring for user registrations and admin-side tracking.
- **Advanced Security Enhancements:** Multi-factor authentication, JWT refresh tokens, rate limiting, and CAPTCHA for spam protection.

---

## 🛠️ Tech Stack

| Frontend     | Backend        | Database    | Auth / API       | Others              |
|--------------|----------------|-------------|------------------|---------------------|
| React.js     | Node.js        | MongoDB     | Google OAuth     | GridFS for uploads  |
| Axios        | Express.js     | Mongoose    | NLP Chatbot API  | Nodemailer (emails) |
| React Router | Multer (files) |             |                  | Tailwind CSS        |

## 🔧 Setup & Installation

### Prerequisites

- Node.js
- MongoDB running locally or on cloud (e.g., MongoDB Atlas)

### Backend

- cd backend
- npm install
- npm start

### Frontend
- cd frontend
- npm install
- npm start


### Ensure .env files are configured with:
## For Backend
- MONGO_URL
- PORT
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- OPENROUTER_API_KEY
- JWT_SECRET
- ADMIN_EMAIL
- ADMIN_PASS
- NOTIFY_EMAIL

## Frontend
- REACT_APP_EMAILJS_SERVICE_ID
-REACT_APP_EMAILJS_TEMPLATE_ID
- REACT_APP_EMAILJS_PUBLIC_KEY
- REACT_APP_BACKEND_URL

### Then , npm start at both backend and frontend directories.



