# DEMO-CRUD 📝

A full-stack CRUD application built with **React (Vite + TypeScript)** on the frontend and **Node.js + Express + MongoDB** on the backend.  
Authentication is handled using **Firebase Google Authentication**.

---

## 🚀 Features

- Google Sign-In using Firebase
- Secure authentication with Firebase ID tokens (JWT)
- Create, read, and delete notes
- Protected backend APIs
- Clean separation of frontend and backend
- Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend
- React (Vite + TypeScript)
- Firebase Authentication
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Firebase Admin SDK

---

## 📁 Project Structure

```text
DEMO-CRUD/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── api.ts
│   │   └── firebase.ts
│   ├── public/
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── README.md


---

## 🔐 Authentication Flow

1. User signs in using Google via Firebase
2. Firebase generates an ID token (JWT)
3. Token is stored on the client
4. Token is sent in request headers to the backend
5. Backend verifies the token using Firebase Admin SDK
6. Authenticated users can access protected routes

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/akshit-max/DEMO-CRUD.git
cd DEMO-CRUD


2️⃣ Backend Setup
cd backend
npm install


Create a .env file using .env.example and add:

MongoDB connection URI

Firebase service account credentials

Required environment variables

Start the backend server:

npm start

3️⃣ Frontend Setup
cd frontend
npm install


Create a .env file using .env.example and add:

Firebase client configuration

Backend API base URL

Start the frontend development server:

npm run dev
