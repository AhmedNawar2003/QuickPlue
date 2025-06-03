import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskStatus } from "@/types/task";

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description?: string, dueDate?: string) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (title, description, dueDate) => {
        const newTask: Task = {
          id: uuidv4(),
          title,
          description,
          status: "todo",
          createdAt: new Date().toISOString(),
          dueDate,
        };
        set({ tasks: [...get().tasks, newTask] });
      },
      updateTask: (id, updates) => {
        set({
          tasks: get().tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
        });
      },
      deleteTask: (id) => {
        set({ tasks: get().tasks.filter((task) => task.id !== id) });
      },
      moveTask: (id, newStatus) => {
        set({
          tasks: get().tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          ),
        });
      },
    }),
    {
      name: "quickpulse-tasks", // key for localStorage
    }
  )
);
