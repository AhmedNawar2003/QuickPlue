"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TaskFilterType, SortOption } from "@/types/task"
import { Label } from "@/components/ui/label"
import { Filter, CalendarClock } from "lucide-react"
import { useId } from "react"

interface TaskFiltersProps {
  filter: TaskFilterType
  setFilter: (value: TaskFilterType) => void
  sort: SortOption
  setSort: (value: SortOption) => void
}

export function TaskFilters({
  filter,
  setFilter,
  sort,
  setSort,
}: TaskFiltersProps) {
  const filterId = useId()
  const sortId = useId()

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-end mt-6 w-full">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <Label htmlFor={filterId}>Filter</Label>
      </div>

      <Select
        defaultValue={filter}
        onValueChange={(value) => setFilter(value as TaskFilterType)}
      >
        <SelectTrigger id={filterId} className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="today">Due Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="past">Overdue</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <CalendarClock className="w-4 h-4 text-muted-foreground" />
        <Label htmlFor={sortId}>Sort By</Label>
      </div>

      <Select
        defaultValue={sort}
        onValueChange={(value) => setSort(value as SortOption)}
      >
        <SelectTrigger id={sortId} className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="createdAt">Created At</SelectItem>
          <SelectItem value="dueDate">Due Date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
