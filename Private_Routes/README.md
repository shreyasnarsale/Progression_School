# 🔐 React Private Routes Application

## 📌 Project Overview

This project demonstrates how to implement **Private Routes (Protected Routes)** in a React application using **React Router v6** and the **Context API**.

The application restricts access to certain pages based on user authentication status.
Unauthenticated users are redirected to a login page, while authenticated users can access protected content.

---

## 🎯 Objectives

* Implement authentication using **React Context**
* Protect routes using a **PrivateRoute component**
* Redirect unauthenticated users to the login page
* Allow users to log in and log out
* Update navigation based on authentication state
* Simulate real-world authentication flow

---

## 🚀 Features

* 🔐 Authentication using Context API
* 🧭 Private routes with React Router v6
* 🔄 Redirect unauthenticated users to Login
* 🔓 Logout functionality
* 🧩 Clean and modern UI
* 📱 Responsive, real-world layout

---

## 🗂️ Project Structure

```
src/
├── auth/
│   └── AuthContext.jsx
│
├── components/
│   ├── Navbar.jsx
│   └── PrivateRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx   (Protected Page)
│
├── App.jsx
├── main.jsx
├── index.css
```

---

## 🛠️ Technologies Used

* **React**
* **Vite**
* **React Router DOM v6**
* **Context API**
* **JavaScript (ES6+)**
* **CSS**

---

## 🧑‍💻 How to Run the Project Locally

### ✅ Step 1: Prerequisites

Ensure you have the following installed:

* **Node.js** (v16+ recommended)
* **npm**

Check versions:

```bash
node -v
npm -v
```

---

### ✅ Step 2: Install Dependencies

Navigate into the project directory and run:

```bash
npm install
```

---

### ✅ Step 3: Start the Development Server

```bash
npm run dev
```

---

### ✅ Step 4: Open in Browser

Vite will display a URL similar to:

```
http://localhost:5173/
```

Open it in your browser.

---

## 📍 Application Routes

| Route        | Access  | Description                  |
| ------------ | ------- | ---------------------------- |
| `/`          | Public  | Home page                    |
| `/login`     | Public  | Login page                   |
| `/dashboard` | Private | Protected dashboard          |
| `*`          | Public  | Invalid route (optional 404) |

---

## 🔐 Authentication Flow

1. User visits a protected route (`/dashboard`)
2. If **not authenticated**, user is redirected to `/login`
3. Clicking **Login** updates authentication state
4. User is redirected to the protected page
5. Clicking **Logout** resets authentication state and redirects to Home

---

## 🧩 Key Components Explained

### 🔹 AuthContext

* Stores authentication state (`isAuthenticated`)
* Provides `login()` and `logout()` functions
* Makes auth state available throughout the app

### 🔹 PrivateRoute

* Checks authentication status
* Renders protected content if authenticated
* Redirects to login page if not authenticated

### 🔹 Navbar

* Displays Login or Logout based on auth state
* Shows protected links only when logged in

---

## 🧪 How to Test the App

1. Open `/dashboard` directly → redirected to `/login`
2. Click **Login** → redirected to Dashboard
3. Refresh page → auth resets (expected behavior)
4. Click **Logout** → redirected to Home
5. Try accessing Dashboard again → redirected to Login

---

## 📌 Limitations (For Assignment Scope)

* Authentication is **simulated**
* No backend or real user credentials
* Auth state resets on page refresh

---

## 🌱 Future Enhancements

* 💾 Persist authentication using `localStorage`
* 🔐 Role-based access (Admin/User)
* 📱 Mobile responsive navigation
* 🎨 Dark mode
* 🔒 Protect multiple routes

---

## 📜 License

This project is created for **educational and learning purposes**.


