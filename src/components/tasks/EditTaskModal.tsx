"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/store/task-store";
import { Task } from "@/types/task";
import { toast } from "sonner";

type Props = {
  task: Task;
  className?: string;
};

export default function EditTaskModal({ task }: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const { updateTask } = useTaskStore();

  const handleUpdate = () => {
    if (!title.trim()) return toast.error("Title is required");

    updateTask(task.id, { title, description });
    toast.success("Task updated");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer w-full sm:w-auto"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />
          <Button onClick={handleUpdate} className="w-full">
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
