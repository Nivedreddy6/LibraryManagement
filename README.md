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
| **Frontend Framework** | [![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) | Core library for building declarative, component-driven user interfaces. |
| **Routing** | [![React Router DOM v7](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) | Declarative client-side routing, nested routes, and route protection. |
| **State Management** | [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)<br>[![React-Redux](https://img.shields.io/badge/React--Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://react-redux.js.org/) | Predictable global state management for book favorites and synchronized local storage. |
| **Build Tool & Dev Server** | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/) | High-performance build tool with Instant Hot Module Replacement (HMR). |
| **HTTP Client** | [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) | Promise-based HTTP client with configured base URLs for REST API communication. |
| **Mock Backend / REST API** | [![JSON Server](https://img.shields.io/badge/JSON_Server-080808?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server) | Local full-fake REST API server powered by `db.json`. |
| **Live API Hosting** | [![My JSON Server](https://img.shields.io/badge/My_JSON_Server-181717?style=for-the-badge&logo=github&logoColor=white)](https://my-json-server.typicode.com/) | Online fake REST API hosting directly synchronized with the GitHub repository. |
| **Code Linting** | [![Oxlint](https://img.shields.io/badge/Oxlint-F38020?style=for-the-badge&logo=rust&logoColor=white)](https://oxc.rs/docs/guide/usage/linter.html) | High-speed Rust-based linter for clean, performant, and error-free code. |
| **Icons** | [![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/) | Modern, customizable SVG icon set for UI navigation and indicators. |
| **Visual Effects** | [![Canvas Confetti](https://img.shields.io/badge/Canvas_Confetti-FF69B4?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/canvas-confetti) | Particle confetti celebration effect for interactive user actions. |
| **Styling** | [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) | Custom responsive UI styling leveraging CSS Grid, Flexbox, Glassmorphism, and CSS Variables. |
| **Deployment & Hosting** | [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) | Cloud platform for automated CI/CD deployment and SPA routing (`vercel.json`). |
| **Version Control & Collaboration** | [![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)<br>[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) | Distributed source code management and repository hosting. |
| **Package Manager** | [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) | Dependency and script management for Node.js packages. |

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
