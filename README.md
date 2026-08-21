# 📚 Library Management System

A full-stack React web application for exploring, managing, and bookmarking books, featuring Redux state management, dynamic filtering & sorting, RESTful API integration, user authentication, and responsive UI design.

![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7.18-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.18-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-0.17-080808?style=for-the-badge&logo=json&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
[![GitHub](https://img.shields.io/badge/GitHub-Nivedreddy6%2FLibraryManagement-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nivedreddy6/LibraryManagement)

## 🌐 Live Demo & API Endpoints

- **🚀 Live Application (Vercel)**: [https://library-management-six-silk.vercel.app](https://library-management-six-silk.vercel.app)
- **🗄️ Live Mock REST API (My JSON Server)**: [https://my-json-server.typicode.com/Nivedreddy6/LibraryManagement](https://my-json-server.typicode.com/Nivedreddy6/LibraryManagement)
  - 📚 **Books Endpoint**: `https://my-json-server.typicode.com/Nivedreddy6/LibraryManagement/books`
  - 👤 **Users Endpoint**: `https://my-json-server.typicode.com/Nivedreddy6/LibraryManagement/users`

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

## 🛠️ Tools & Technologies Used

A comprehensive list of the tools, libraries, frameworks, and services powering this project:

| Category | Tool / Technology | Description & Usage |
| :--- | :--- | :--- |
| **Frontend Framework** | **[React 19](https://react.dev/)** | Core library for building declarative, component-driven user interfaces. |
| **Routing** | **[React Router DOM v7](https://reactrouter.com/)** | Declarative client-side routing, nested routes, and route protection. |
| **State Management** | **[Redux Toolkit](https://redux-toolkit.js.org/)** & **[React-Redux](https://react-redux.js.org/)** | Predictable global state management for book favorites and synchronized local storage. |
| **Build Tool & Dev Server** | **[Vite](https://vite.dev/)** | High-performance build tool with Instant Hot Module Replacement (HMR). |
| **HTTP Client** | **[Axios](https://axios-http.com/)** | Promise-based HTTP client with configured base URLs for REST API communication. |
| **Mock Backend / REST API** | **[JSON Server](https://github.com/typicode/json-server)** | Local full-fake REST API server powered by `db.json`. |
| **Live API Hosting** | **[My JSON Server](https://my-json-server.typicode.com/)** | Online fake REST API hosting directly synchronized with the GitHub repository. |
| **Code Linting** | **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** | High-speed Rust-based linter for clean, performant, and error-free code. |
| **Icons** | **[Lucide React](https://lucide.dev/)** | Modern, customizable SVG icon set for UI navigation and indicators. |
| **Visual Effects** | **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)** | Particle confetti celebration effect for interactive user actions. |
| **Styling** | **Vanilla Modern CSS3** | Custom responsive UI styling leveraging CSS Grid, Flexbox, Glassmorphism, and CSS Variables. |
| **Deployment & Hosting** | **[Vercel](https://vercel.com/)** | Cloud platform for automated CI/CD deployment and SPA routing (`vercel.json`). |
| **Version Control & Collaboration** | **[Git](https://git-scm.com/) & [GitHub](https://github.com/)** | Distributed source code management and repository hosting. |
| **Package Manager** | **[npm](https://www.npmjs.com/)** | Dependency and script management for Node.js packages. |

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nivedreddy6/LibraryManagement.git
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
