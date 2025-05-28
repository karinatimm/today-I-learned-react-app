# Today I Learned App

**Today I Learned** is a small full-stack web application designed to help users share and discover interesting facts across various categories. Built with modern web technologies, this app features fact submission, category filtering, voting for fact credibility, and real-time updates from a live database.

---

## ✨ Features

### Core Functionalities

- **Fact Submission:** Users can add new facts with text, source URL, and category.
- **Category Filtering:** Filter facts by one of eight predefined categories.
- **Voting System:** Upvote interesting facts, mark facts as mind-blowing, or downvote false facts.
- **Fact Validation:** Facts with many downvotes are marked as disputed.
- **Persistent Data:** All facts are saved and retrieved from a real-time database hosted on Supabase.
- **Character Limit:** Fact text input includes a live character counter.

### User Experience Enhancements

- Responsive design optimized for desktop and mobile.
- Intuitive and playful UI for easy navigation.
- Real-time updates of facts without page reloads.

---

## 🛠️ Tech Stack

### Frontend

- **React:** Component-based UI library.
- **JavaScript (ES6+):** Core language powering interactivity.
- **CSS:** Styling and responsive layouts.

### Backend & Database

- **Supabase:** Open-source Firebase alternative providing database, authentication, and API services.

### Deployment

- **Netlify:** Free hosting service to deploy and share your live app.

---

## ⚙️ Architecture & Design

- Modular React components for scalability and reusability.
- State management using React hooks.
- API integration with Supabase for CRUD operations.
- Responsive layout using CSS Flexbox and Grid.
- Voting and category filtering implemented with efficient client-side state logic.

---

### 🌐 Deployment

This project has been deployed on Netlify and is accessible at the following URL:  
**[Today I Learned App on Netlify](https://the-wild-oasis-react-app-kappa.vercel.app)**

---

### 🤝 Quality Assurance

- The project follows best practices and is linted using **ESLint**.
- The entire codebase is written in **TypeScript**, ensuring type safety and reducing runtime errors.
- [![ESLint Status](https://img.shields.io/badge/ESLint-Passing-brightgreen.svg)](https://github.com/karinatimm/today-I-learned-react-app.git)
