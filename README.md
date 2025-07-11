# 📝 NailIT - Responsive ToDo List App

This project is a **responsive ToDo list application** built with **React**, **Tailwind CSS**, and **localStorage**. It allows users to **add**, **edit**, **delete**, and **mark tasks as completed**, with their data saved in the browser even after refresh.

---

## 🚀 Features

✅ **Add ToDos**
- Type your task in the input field and click the plus button to add.

✅ **Delete ToDos**
- Remove a task you no longer need.

✅ **Edit ToDos**
- Click the edit button to update the task text.

✅ **Mark as Completed**
- Check the checkbox to cross out completed tasks.

✅ **Persistence with localStorage**
- All your todos are saved in localStorage, so they remain when you refresh or reopen the app.

✅ **Responsive Design**
- Looks great on both **mobile** and **desktop** screens.
- Uses Tailwind’s responsive classes (`sm:`, `lg:`) to adjust layout.

---

## 🛠️ Technologies Used

- **React** (Functional components and Hooks)
  - `useState` for state management.
  - `useEffect` for reading data from localStorage on startup.
- **Tailwind CSS** for styling.
- **uuid** for generating unique IDs.
- **localStorage** for data persistence.

---

## 📚 What I Learned

- **React Hooks**
  - Managing complex state (`list` array with objects).
  - Updating specific properties (like `isCompleted`) immutably.
  - Using `useEffect` to initialize state from localStorage.

- **Tailwind CSS**
  - Applying responsive styles.
  - Utility-first CSS for rapid UI building.
  - Custom colors and spacing.

- **localStorage**
  - Saving and retrieving JSON data.
  - Ensuring state stays in sync with storage.

- **Building CRUD Applications**
  - Add, edit, delete, and update functionality in a clean UI.
