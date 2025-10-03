# 📇 CardTree

CardTree is a full-stack project that allows you to arrange and manage draggable cards in a grid layout.  
The frontend is built with **Next.js + React Grid Layout**, while the backend is powered by **Node.js + Express + MongoDB**.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [CardTree Frontend](https://card-tree1.vercel.app/)  
- **Backend (Render)**: [CardTree Backend](https://cardtree1-2.onrender.com)

---

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) – React framework for server-side rendering & static site generation
- [React Grid Layout](https://github.com/react-grid-layout/react-grid-layout) – Drag-and-drop grid layout
- [CSS Modules](https://github.com/css-modules/css-modules) – Component-level styling

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

---

## 📂 Project Structure

    CardTree1/
    ├── .gitignore
    ├── README.md
    ├── client
        ├── .gitignore
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── api
        │   │   └── api.js
        │   ├── assets
        │   │   └── react.svg
        │   ├── components
        │   │   └── SyncedGrid.jsx
        │   ├── hooks
        │   │   └── useLayouts.js
        │   ├── index.css
        │   ├── main.jsx
        │   ├── pages
        │   │   └── Home.jsx
        │   ├── styles
        │   │   └── styles.css
        │   └── utils
        │   │   └── formatData.js
        └── vite.config.js
    ├── package-lock.json
    ├── package.json
    └── server
        ├── .gitignore
        ├── app.js
        ├── config
            └── db.js
        ├── controllers
            └── layoutController.js
        ├── middleware
            └── errorHandler.js
        ├── models
            └── Layout.js
        ├── package-lock.json
        ├── package.json
        └── routes
            └── layoutRoutes.js

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
    ```bash
        git clone https://github.com/Manish123Sharma/CardTree1.git
        cd CardTree1

###2️⃣ Backend Setup (Server)

      ```bash
        cd server
        npm install

  Create a .env file in the server/ folder:
  
        ```bash
        MONGO_URI=your-mongodb-uri
        PORT=5000

  Run the backend locally:

    ```bash
    npm start

###3️⃣ Frontend Setup (Client)

    ```bash
    cd client
    npm install
Run the frontend locally:

    ```bash
    npm run dev

---

## ✨ Features

- 🎯 Drag-and-drop grid system
- 🧩 Randomized shuffle pattern
- 📱 Responsive design
- 🌐 Full-stack MERN-like setup with backend API
- 🚀 Deployed frontend & backend

---

## 🤝 Contributing

- Contributions are welcome!
- Feel free to fork this repo, create a new branch, and submit a PR.

---

## **👨‍💻** **Author**

Manish Kumar Sharma

[📧 Email](mailto:your-mksharma256001@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/mks001/) | [🌐 GitHub](https://github.com/Manish123Sharma)

---

##  📜 License

✅ This README includes:
- Features  
- Tech stack  
- Screenshots section (you can replace with your actual images later)  
- Setup steps  
- API reference  
- Future improvements  
