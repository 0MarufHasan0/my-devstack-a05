## 🚀 Dev Stack

A modern and responsive web application for exploring developer technologies and building a personal technology stack.

🌐 Live Demo: https://mydevstack-cyan.vercel.app/

## ✨ Features

🔎 Explore technologies with category, description, rating, difficulty, and badge.

🧰 Add technologies to Your Stack, prevent duplicates, remove individual items, or remove all.

📱 Fully responsive design for mobile, tablet, and desktop.

🔔 React Toastify notifications for add,  remove, and remove-all actions.

⏳ Loading state while technology data is loaded from JSON.

## 🛠️ Technologies

React.js

TypeScript

Tailwind CSS

DaisyUI

React Icons

React Toastify

React Spinners

JSON

Vite

## 🚀 Run Locally

git clone YOUR_GITHUB_REPOSITORY_URL
cd your-project-name
npm install
npm run dev

👨‍💻 Author

Dev Stack

## Q & A

### 1. What is JSX, and why is it used in React?
**Ans :** JSX is a javascript syntax extension . It neither a string or HTML.It is Called Javascript XML .It help us to write HTML code like inside javascript .It make React UI code  Easier to read and write .
---
### 2. What is the difference between props and state?
**Ans :** Props are read only data passed from parent to child and state can change internal data and update the ui
---
### 3. What does the useState hook do, and where did you use it in this project?
**Ans :** The useSate hook used to manage sate in a react component . I used it in this project to manage button trigger , Selected Stack and push the stack in a cart and update the ui when change .
---
### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Ans :** useEffect used to run code after rendering and I used it to fetch JSON data when the component loaded.
---
### 5. Why does every item in a .map() list need a unique key prop?
**Ans :** Every item in a .map() list need a unique key prop because React to need to identify every item and update the ui when list the list changes .
---
### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Ans :** Conditional rendering means showing ui based data one condition . I used it to show empty message when dev stack content is not available .My rendered massage was  "Your stack was empty"
---
### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Ans :** I can pass data passed from a parent component to a child component using props . Props allow us to send data parent to child and The child can send something back to parent using a function through a props
---
