export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskFilterType = "all" | "today" | "week" | "past";
export type SortOption = "createdAt" | "dueDate";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: string;
  dueDate?: string;
}
