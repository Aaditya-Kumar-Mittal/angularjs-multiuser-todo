# 📝 AngularJS Multi-User Task Manager

![AngularJS](https://img.shields.io/badge/AngularJS-v1.x-red?logo=angularjs&style=for-the-badge) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple?logo=bootstrap&style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-Ready-orange?logo=html5&style=for-the-badge) ![CSS3](https://img.shields.io/badge/CSS3-Styled-blue?logo=css3&style=for-the-badge) ![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow?logo=javascript&style=for-the-badge)

---

## 📚 Table of Contents

- [📝 AngularJS Multi-User Task Manager](#-angularjs-multi-user-task-manager)
  - [📚 Table of Contents](#-table-of-contents)
  - [📌 Introduction](#-introduction)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Usage Guide](#-usage-guide)
  - [🪪 License](#-license)

---

## 📌 Introduction

> A lightweight, secure, and responsive **multi-user Todo App** built using **AngularJS**, **Bootstrap**, and **LocalStorage** for task persistence per user.

This project is a **Multi-User Todo Manager** built with the simplicity of AngularJS (v1.x) and powered by Bootstrap for responsive design. It allows multiple users to securely register, login, and manage their individual todo lists, all stored locally in the browser using secure storage techniques.

---

## ✨ Features

✅ Multi-user signup and login functionality  
✅ User-specific Todo list management  
✅ Add, update, and delete tasks with status control  
✅ Data stored securely in `localStorage` using hashed usernames  
✅ Responsive design using Bootstrap  
✅ Separation of concerns using AngularJS services and controllers  
✅ Clean UI with modular HTML templates

---

## 🛠️ Tech Stack

| Technology    | Description                             |
| ------------- | --------------------------------------- |
| 🅰️ AngularJS  | MVC Framework (v1.x) for front-end      |
| 🎨 Bootstrap  | Responsive UI components and layout     |
| 🧱 HTML5/CSS3 | Markup and Styling                      |
| ⚙️ JavaScript | App logic and controller logic          |
| 🔒 CryptoJS   | Used for secure storage (crypto.min.js) |

---

## 📁 Project Structure

```md
angularjs-multiuser-todo/
├── app.js
├── index.html
├── routes.js
├── controllers/
│ ├── authController.js
│ └── todoController.js
├── css/
│ └── style.css
├── libs/
│ └── crypto.min.js
├── service/
│ └── storageServices.js
├── views/
│ ├── login.html
│ ├── signup.html
│ └── todo.html
```

---

## 🚀 Usage Guide

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aaditya-Kumar-Mittal/angularjs-multiuser-todo.git
   ```

2. **Open the app:**

   - Open `index.html` directly in your browser _(no server needed)_

3. **Sign Up and Use:**

   - Sign up with a new username and password
   - Log in to manage your personal task list
   - Add, delete, or mark todos as complete

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).
