# 📘 React Router Application with Dynamic Navigation

## 📌 Project Overview

This is a **React single-page application** built using **Vite** and **React Router v6**.
The project demonstrates **client-side routing**, **dynamic routes**, **API integration**, and a **modern sidebar-based UI**.

Users can navigate between pages such as **Home**, **Users**, **User Details**, **Quotes**, and **Contact**, with data fetched from public APIs.

---

## 🎯 Features

* ⚛️ Built with **React + Vite**
* 🧭 Client-side routing using **React Router v6**
* 📚 Dynamic routes (`/users/:id`)
* 🌐 API integration using `fetch`
* 🧩 Reusable components
* 🎨 Modern card-based UI
* 📱 Responsive layout
* ❌ Custom 404 (Not Found) page
* 🔄 Navigation with active link highlighting

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Users.jsx
│   ├── UserDetails.jsx
│   ├── Quotes.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Technologies Used

* **React**
* **Vite**
* **React Router DOM**
* **JavaScript (ES6+)**
* **CSS**

---

## 🌐 APIs Used

* Users API:
  [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

* Quotes API:
  [https://dummyjson.com/quotes](https://dummyjson.com/quotes)

---

## 🧑‍💻 How to Run the Project Locally

Follow the steps below to run this project on your system.

---

### ✅ Step 1: Prerequisites

Make sure you have the following installed:

* **Node.js** (v16 or later recommended)
* **npm** (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

---

### ✅ Step 2: Clone or Download the Project

If using Git:

```bash
git clone <repository-url>
```

Or download the ZIP and extract it.

---

### ✅ Step 3: Install Dependencies

Navigate into the project folder and run:

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

---

### ✅ Step 4: Start the Development Server

```bash
npm run dev
```

---

### ✅ Step 5: Open in Browser

After running the command, Vite will show a local URL such as:

```
http://localhost:5173/
```

Open this URL in your browser to view the application.

---

## 📄 Available Routes

| Route        | Description           |
| ------------ | --------------------- |
| `/`          | Home page             |
| `/users`     | Users list (API data) |
| `/users/:id` | User details page     |
| `/quotes`    | Quotes page           |
| `/contact`   | Contact page          |
| `*`          | 404 Not Found         |

---

## 🖥️ Screens Overview

* **Home Page** – Welcome message and project overview
* **Users Page** – Displays users in a card grid layout
* **User Details Page** – Shows detailed user information
* **Quotes Page** – Displays inspirational quotes
* **Contact Page** – Simple contact form
* **404 Page** – Handles invalid routes

---

## 🧪 How to Test the App

1. Navigate through sidebar links
2. Click on **View Details** on any user
3. Use browser URL bar to test dynamic routes
4. Try entering an invalid URL to see the 404 page

---

## 📌 Future Improvements

* 🔍 Search and filter users
* 📄 Pagination / Infinite scrolling
* 🔐 Authentication & Private Routes
* 💾 Persist data using localStorage
* 📱 Enhanced mobile responsiveness
* 🚀 Deploy to Netlify or Vercel

---

## 📜 License

This project is for **learning and educational purposes**.

---

## 🙌 Acknowledgements

* JSONPlaceholder API
* DummyJSON API
* React & Vite documentation

