"use client";

import { Task, TaskStatus } from "@/types/task";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/store/task-store";
import { toast } from "sonner";
import EditTaskModal from "./EditTaskModal";
import { format } from "date-fns";
import { CalendarDays, Clock } from "lucide-react";

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const { deleteTask, moveTask } = useTaskStore();
  const nextStatus = getNextStatus(task.status);

  return (
    <Card className="w-full max-w-full shadow-md hover:shadow-lg transition duration-500 cursor-pointer">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg m-2">{task.title}</h3>
          <Badge
            variant={
              task.status === "todo"
                ? "secondary"
                : task.status === "in-progress"
                ? "outline"
                : "default"
            }
          >
            {task.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground space-y-2">
        {task.description && <p>{task.description}</p>}

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span>
              Created:{" "}
              {format(new Date(task.createdAt), "MMM d, yyyy | h:mm a")}
            </span>
          </div>

          {task.dueDate && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>
                Due: {format(new Date(task.dueDate), "MMM d, yyyy | h:mm a")}
              </span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
        {nextStatus && (
          <Button
            className="w-full sm:w-auto cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => {
              moveTask(task.id, nextStatus);
              toast.success("Task moved!");
            }}
          >
            Move to {nextStatus}
          </Button>
        )}

        <EditTaskModal className="w-full sm:w-auto" task={task} />

        <Button
          className="w-full sm:w-auto cursor-pointer"
          variant="destructive"
          size="sm"
          onClick={() => {
            deleteTask(task.id);
            toast.success("Task deleted");
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

function getNextStatus(status: TaskStatus): TaskStatus | null {
  if (status === "todo") return "in-progress";
  if (status === "in-progress") return "done";
  return null;
}
