# 📚 Library Management System

A full-stack React web application for exploring, managing, and bookmarking books, featuring Redux state management, dynamic filtering & sorting, RESTful API integration, user authentication, and responsive UI design.

## ✨ Features

- **📖 Book Catalog**: Browse a wide collection of books with detailed metadata (Author, Category, Shelf Location, Rating, Highlights, Loan Duration).
- **❤️ Favorites (Redux Toolkit)**: Add/remove favorite books using Redux state with persistent local storage.
- **🔍 Dynamic Filtering & Search**:
  - Live search by book title.
  - Category filtering across all genres (Computer Science, Science Fiction, Software Engineering, Self-Help, etc.).
  - Budget/Value filtering (Low, Medium, High).
  - Rating sorting (High to Low, Low to High).
- **➕ CRUD Operations**: Full capability to Add, View, Edit, and Delete books.
- **🔐 User Authentication**: Protected routes for adding/editing books with login, registration, and logout workflows.
- **⚡ Modern Tech Stack**: Built with React 19, Redux Toolkit, React Router v7, Axios, and Vite.
- **🗄️ Mock REST API**: Powered by `json-server` watching `db.json`.

## 🚀 Tech Stack

- **Frontend**: React 19, React Router DOM, Redux Toolkit, React Redux
- **Icons & Effects**: Lucide React, Canvas Confetti
- **Build Tool**: Vite
- **Styling**: Custom CSS (CSS Grid, Flexbox, Gradients)
- **Backend / API**: JSON Server (REST API mock)
- **HTTP Client**: Axios

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LibraryManagement.git
   cd LibraryManagement
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Mock API Server**:
   ```bash
   npm run server
   ```
   *(Runs json-server on http://127.0.0.1:3000)*

4. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```
   *(Runs Vite dev server on http://localhost:5173)*

## 📂 Project Structure

```
LibraryManagement/
├── public/
├── src/
│   ├── app/              # Redux store configuration
│   ├── components/       # Reusable UI components (Navbar, BookCard)
│   ├── features/         # Redux slices (favoriteSlice)
│   ├── pages/            # Page components (Home, Books, Favorites, Auth, Details)
│   ├── routes/           # Routing configuration & ProtectedRoute
│   ├── services/         # Axios API instance configuration
│   ├── App.css           # Filter layout styles
│   ├── App.jsx           # Root App component
│   ├── index.css         # Global design system & theme styles
│   └── main.jsx          # App entry point with Redux Provider & Router
├── db.json               # Mock database for JSON Server
├── package.json
└── vite.config.js
```

## 📜 License

MIT License. Free to use and modify.
