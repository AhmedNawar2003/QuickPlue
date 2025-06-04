"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useId, useState } from "react";
import { useTaskStore } from "@/store/task-store";
import { Plus } from "lucide-react";

export function AddTaskModal() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const titleId = useId();
  const descriptionId = useId();
  const dueDateId = useId();
  const formId = useId();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) return;
    addTask(title, description, dueDate || undefined);
    setTitle("");
    setDescription("");
    setDueDate("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg hover:scale-105 transition-all md:relative md:bottom-auto md:right-auto"
        >
          <Plus className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline cursor-pointer">Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add New Task
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Fill in the details to create a new task.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 pt-2"
          id={formId}
        >
          <div className="space-y-2">
            <Label htmlFor={titleId}>Title</Label>
            <Input
              id={titleId}
              placeholder="Enter Your Task Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={descriptionId}>Description</Label>
            <Textarea
              id={descriptionId}
              placeholder="Your Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={dueDateId}>Due Date</Label>
            <Input
              id={dueDateId}
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Add Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
