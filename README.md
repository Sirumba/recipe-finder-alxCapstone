# Recipe Finder

Recipe Finder is a responsive frontend web application built as part of the **ALX Frontend Capstone Project**.  
The application allows users to search for recipes by name and view detailed information about each dish using data fetched from **TheMealDB public API**.

The project focuses on API integration, state management, and building a clean, user-friendly interface with React.

## 🚀 Live Demo

👉 https://recipe-finder-alx-capstone.vercel.app

## 📌 Features

- Search for recipes by dish name
- Fetch real-time recipe data from TheMealDB API
- Display a list of matching recipes with images and titles
- View detailed recipe information, including:
  - Ingredients and measurements
  - Preparation instructions
  - Embedded YouTube cooking video (when available)
  - Source link to the original recipe
- Loading and error state handling
- Responsive design for mobile, tablet, and desktop screens

---

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript**
- **Tailwind CSS** – styling and responsiveness
- **Zustand** – global state management
- **Axios** – API requests
- **Vercel** – deployment

---

## 🧠 What I Learned

Through building this project, I practiced and strengthened my understanding of:

- Integrating external APIs in a React application
- Managing global state with Zustand
- Handling asynchronous data fetching and errors
- Structuring a scalable React project with reusable components
- Creating responsive layouts using Tailwind CSS
- Deploying a frontend application to a production environment

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   └── RecipeDetails.jsx
├── store/
│   └── recipeStore.js
├── App.jsx
└── main.jsx
```

## ⚙️ Installation & Local Setup

To run the project locally:

```bash
npm install
npm run dev
```

The application will be available at:
http://localhost:5173

## 📅 Project Status

This project was built during the ALX Frontend Capstone phase and is considered feature-complete for submission.
Additional improvements and stretch features may be added in the future.

## 📄 License

This project is for educational purposes as part of the ALX Software Engineering Program.
