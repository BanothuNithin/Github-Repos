# GitHub Repo Search Dashboard

A full-stack web app to search GitHub repositories by keyword, store results in MongoDB, and display them on a dashboard.

---

## 🚀 Live Demo

- **Check it out->:** [https://Rpeo-Project](https://github-repos-client.onrender.com/)
---

## 🗂️ Features

- Search GitHub repositories by keyword
- Store results in MongoDB Atlas
- View stored results with pagination
- Responsive UI with modern styling
- Error handling and loading states

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, Mongoose, Axios
- **Database:** MongoDB Atlas
- **Deployment:** Render (backend), Render (frontend)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/BanothuNithin/GitHub_Repo.git
cd GitHub_Repo
```

### 2. Backend Setup

```bash
cd Server
npm install
```

- Create a `.env` file in the `Server` folder:
  ```
  MONGODB_URI="mongodb+srv://bnithinnaik:<db_password>@cluster0.ldxawtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  ```
- Start the backend:
  ```bash
  npm start
  ```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

## 🌐 API Endpoints

- **POST** `/api/repos/search`  
  Body: `{ "keyword": "react", "page": 1 }`  
  Searches GitHub and stores results.

- **GET** `/api/repos/results?page=1`  
  Fetches stored results with pagination.

---

## 📝 Environment Variables

Backend `.env` example:
```
MONGODB_URI="mongodb+srv://bnithinnaik:<db_password>@cluster0.ldxawtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
```

---

## 📦 Deployment

- Backend deployed on Render: [Backend-url](https://github-repos-2v9k.onrender.com)
- Frontend deployed on Vercel/Netlify/Render: [Frontend-url](https://github-repos-client.onrender.com/)

---

## 👤 Author

Banothu Nithin

---
<img width="1920" height="991" alt="Screenshot (41)" src="https://github.com/user-attachments/assets/d26dc472-bf6a-4765-8874-2cb452a34e0d" />


