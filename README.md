# ✅ Task Management Project

A simple and modern task management application built with React, Zustand, and TypeScript.  
Manage your tasks easily with filtering, sorting, and a clean UI.

---

## ✨ Features

- 📝 Create, edit, and delete tasks
- 🔁 Move tasks between: `todo`, `in-progress`, `done`
- 📆 Filter by due date: today, this week, past
- 🔽 Sort tasks by creation date or due date
- 📱 Responsive and accessible UI
- 🔔 Toast notifications with Sonner
- ♻️ Reusable and modular components
- ⚡ State management using Zustand
- 📅 Date formatting via `date-fns`
- 🎨 Icon support with Lucide
- 🎯 Designed with Tailwind CSS + shadcn/ui

---

## 🧰 Technologies Used

- ⚛️ **React 18**
- 🟦 **TypeScript**
- 🐻 **Zustand**
- 📆 **date-fns**
- 🔔 **Sonner**
- 🧩 **Lucide React**
- 💨 **Tailwind CSS**
- 🧪 **shadcn/ui**
- 🚀 **Next.js** (optional)

---

## 🖼️ Icons

This project uses **Lucide React** icons for clarity and aesthetics:

- 🗓️ `CalendarDays` – creation date  
- ⏰ `Clock` – due date  
- 🏷️ `Badge` – status indicators  

🔗 [Lucide Icon Library](https://lucide.dev/)

---


## Project Structure

src/
├── components/
│ ├── TaskCard.tsx
│ ├── TaskList.tsx
│ ├── EditTaskModal.tsx
│ └── ...
├── store/
│ └── task-store.ts
├── types/
│ └── task.ts
├── pages/
│ └── index.tsx
└── utils/
└── date-utils.ts


- **components/** — Reusable React components for the UI.
- **store/** — Zustand store for managing tasks state.
- **types/** — TypeScript interfaces and types.
- **pages/** — Application pages (if using Next.js).
- **utils/** — Utility functions, e.g., date formatting.

---


---

## 🚀 Deployment

You can deploy this project on:

- ▲ [**Live Preview**](https://quick-plue.vercel.app/) 



---

## 🧪 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/task-manager.git

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
http://localhost:3000
````


🌱 Future Enhancements

🔒 Authentication support

☁️ Persistent storage (e.g., backend or localStorage)

🧲 Drag-and-drop for task reordering

🌓 Dark mode toggle

📱 Mobile-first UI refinements

✅ Checklists or subtasks



📚 References

React Documentation

TypeScript

Zustand

date-fns

Sonner Toast

Lucide Icons

Tailwind CSS

shadcn/ui

👨‍💻 Author
Ahmed Nawar


