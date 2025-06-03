"use client";

import { useMemo } from "react";
import { isToday, isThisWeek, isPast } from "date-fns";
import { Task, TaskStatus, TaskFilterType, SortOption } from "@/types/task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  status: TaskStatus;
  filter: TaskFilterType;
  sort: SortOption;
}

export default function TaskList({
  tasks,
  status,
  filter,
  sort,
}: TaskListProps) {
  const filteredTasks = useMemo(() => {
    let temp = [...tasks].filter((t) => t.status === status);

    // Filter by due date
    if (filter === "today") temp = temp.filter(t => t.dueDate && isToday(new Date(t.dueDate)));
    if (filter === "week") temp = temp.filter(t => t.dueDate && isThisWeek(new Date(t.dueDate)));
    if (filter === "past") temp = temp.filter(t => t.dueDate && isPast(new Date(t.dueDate)));

    // Sort
    if (sort === "createdAt") {
      temp.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sort === "dueDate") {
      temp.sort((a, b) => new Date(a.dueDate || 0).getTime() - new Date(b.dueDate || 0).getTime());
    }

    return temp;
  }, [tasks, status, filter, sort]);

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center text-muted-foreground mt-10">
        <p className="text-sm">📝 No tasks in this section yet.</p>
        <p className="text-xs text-gray-500">Add a task using the button above.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 mt-4 animate-fade-in">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
