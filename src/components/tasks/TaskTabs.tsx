"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTaskStore } from "@/store/task-store";
import { AddTaskModal } from "@/components/tasks/AddTaskModal";
import { TaskFilters } from "@/components/tasks/TaskFilters";
import { TaskFilterType } from "@/types/task";
import TaskList from "./TaskList";
import { useState } from "react";

export function TaskTabs() {
  const [sort, setSort] = useState<"createdAt" | "dueDate">("createdAt");
  const tasks = useTaskStore((state) => state.tasks);
  const [filter, setFilter] = useState<TaskFilterType>("all");
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTaskModal />
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      </div>

      <Tabs defaultValue="todo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="cursor-pointer" value="todo">To Do</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="done">Done</TabsTrigger>
        </TabsList>

        <TabsContent value="todo">
          <TaskList tasks={tasks} status="todo" filter={filter} sort={sort} />
        </TabsContent>
        <TabsContent value="in-progress">
          <TaskList
            tasks={tasks}
            status="in-progress"
            filter={filter}
            sort={sort}
          />
        </TabsContent>
        <TabsContent value="done">
          <TaskList tasks={tasks} status="done" filter={filter} sort={sort} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
