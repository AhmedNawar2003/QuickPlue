# Task Management Project

A simple and modern task management application built with React, Zustand, and TypeScript. This project allows users to create, update, delete, and organize tasks by their status and due dates. It supports filtering and sorting tasks to enhance productivity and task tracking.

---

## Features

- Create, edit, and delete tasks.
- Move tasks between statuses: `todo`, `in-progress`, and `done`.
- Filter tasks by due date: today, this week, past due, or all.
- Sort tasks by creation date or due date.
- Responsive and accessible UI with animated interactions.
- Toast notifications for user feedback on actions.
- Modular and reusable React components.
- Local state management with Zustand.
- Date handling with `date-fns`.
- Iconography with `lucide-react`.
- Custom UI components for cards, badges, buttons, and modals.

---

## Technologies Used

- **React 18** — Front-end library for building UI components.
- **TypeScript** — Typed JavaScript for safer and scalable code.
- **Zustand** — Lightweight state management library.
- **date-fns** — Modern JavaScript date utility library.
- **Sonner** — Toast notification library.
- **Lucide React** — Open source icon library.
- **Tailwind CSS** — Utility-first CSS framework for styling.
- **shadcn/ui** — Component library based on Radix UI and Tailwind CSS.
- **Next.js (optional)** — For server-side rendering and routing if used.

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

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-project.git
   cd task-management-project
   
2.Install dependencies:
npm install
# or
yarn install

3.Run the development server:
npm run dev
# or
yarn dev

4.Open http://localhost:3000 in your browser.


## Future Improvements

Add user authentication.

Persist tasks in a backend or local storage.

Add drag-and-drop support for reordering tasks.

Enhance accessibility features.

Add dark mode toggle.

Improve mobile responsiveness.

## References
React Documentation

TypeScript

Zustand

date-fns

Sonner Toast

Lucide Icons

Tailwind CSS

shadcn/ui

Author
Ahmed Nawar


