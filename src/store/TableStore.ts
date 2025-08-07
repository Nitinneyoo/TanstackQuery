// store/taskStore.ts
import { create } from "zustand";
import type { Task } from "../types/types";

interface TaskState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));
