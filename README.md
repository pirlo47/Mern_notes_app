# MERN Stack Note-Taking Application

A fully functional, responsive, and beginner-friendly full-stack note-taking application built using the MERN stack (MongoDB, Express, React, Node.js). This project covers everything from API development and database integration to frontend implementation and production deployment.

## 🚀 Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete notes.
- **REST API**: Built with Node.js and Express following professional routing standards.
- **NoSQL Database**: MongoDB integration using Mongoose for data persistence.
- **Rate Limiting**: Implementation of professional security measures using Upstash Redis to prevent API abuse.
- **Responsive UI**: Built with React, Tailwind CSS, and DaisyUI for a modern, mobile-first look.
- **Environment Safety**: Usage of .env files to protect sensitive credentials.
- **Deployment Ready**: Configured for deployment on platforms like Render.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, Lucide React (Icons), Axios.
- **Backend**: Node.js, Express.
- **Database**: MongoDB (Mongoose ODM).
- **Rate Limiting**: Upstash Redis.
- **Tools**: Nodemon (Development), Postman (API Testing).

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- VS Code (or any preferred code editor)
- A MongoDB Atlas account
- An Upstash account for Redis rate limiting

## 📂 Project Structure

```
├── backend
│   ├── src
│   │   ├── config       # DB and Upstash configurations
│   │   ├── controllers  # Business logic for routes
│   │   ├── middleware   # Rate limiting and other middlewares
│   │   ├── models       # Mongoose schemas
│   │   ├── routes       # API endpoint definitions
│   │   └── server.js    # Entry point for backend
│   └── .env             # Environment variables (ignored by Git)
├── frontend
│   ├── src
│   │   ├── components   # Reusable UI components
│   │   ├── pages        # Main application views
│   │   ├── lib          # Utility functions and Axios instance
│   │   └── App.jsx      # Routing configuration
└── package.json         # Root scripts for deployment
```

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd mern-notes-app
```

### 2. Backend Setup

- Navigate to the backend folder: `cd backend`
- Install dependencies: `npm install`
- Create a `.env` file and add your credentials:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

- Start development server: `npm run dev`

### 3. Frontend Setup

- Navigate to the frontend folder: `cd ../frontend`
- Install dependencies: `npm install`
- Start the Vite development server: `npm run dev`

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes (Sorted by newest) |
| GET | `/api/notes/:id` | Fetch a specific note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🚀 Deployment

The project is configured for easy deployment on Render:

- **Root Script**: A package.json in the root directory handles building both frontend and backend simultaneously.
- **Static Serving**: The Express backend is configured to serve the React production build (dist folder) in a production environment.
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Credits

This project was built following the comprehensive freeCodeCamp.org tutorial by Barack.