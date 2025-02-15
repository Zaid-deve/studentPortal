# Student Portal

## 📌 Project Description

The **Student Portal** is a full-stack web application that allows students to register, log in, and apply for various applications. It includes authentication, role-based access, and application management.

## 🚀 Features

- User authentication (Signup/Login)
- Secure password hashing
- Unique email & phone number validation
- Application management system
- RESTful API backend using Express & MongoDB

## 🛠 Tech Stack

- **Frontend:** React.js / Next.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Hosted on Railway)
- **Authentication:** JWT (JSON Web Token)

## 📂 Folder Structure

```
student-portal/
├── backend/        # Express.js API
│   ├── models/     # Mongoose Schemas
│   ├── cotrollers/ # Controllers
│   ├── routes/     # API Routes
│   ├── config/     # Database Config
│   ├── index.js    # Main Entry Point
│
├── frontend/       # React/Next.js Client
│   ├── components/ # UI Components
│   ├── hooks/      # Custom Hooks
│
└── README.md       # Documentation
```

## 🏗 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Zaid-deve/studentPortal.git
cd studentPortal
```

### 2️⃣ Backend Setup

```sh
cd server
npm install
```

#### Configure Environment Variables

Update a `.env` file in the `server/` directory:

```
PORT=5000
HOST=your-host
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

Run the backend server:

```sh
npm start
```

### 3️⃣ Frontend Setup

```sh
cd ../client
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `client/` directory:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run the frontend:

```sh
npm run dev
```

## 🌍 Deployment

### Deploying Backend to Railway

1. Push your project to GitHub
2. Go to [Railway](https://railway.app/) and create a new project
3. Connect your GitHub repository
4. Set environment variables in Railway
5. Deploy!

### Deploying Frontend to Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run deployment command:
   ```sh
   vercel
   ```

## 🛡 Security & Best Practices

- Use strong **JWT secrets**
- Enable **CORS** for API security
- Use **bcrypt** for password hashing
- Always validate **user input**

## 🤝 Contributing

Contributions are welcome! Feel free to submit an issue or a pull request.

## 📜 License

This project is **MIT Licensed**. Feel free to use and modify it.

---

✨ Happy Coding! 🚀

