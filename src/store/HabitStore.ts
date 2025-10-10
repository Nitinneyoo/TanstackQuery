import { create } from "zustand";
import type { Habit } from "@/types/types";

interface HabitStore {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly" | "monthly", description: string) => void;
}

const useHabitStore = create<HabitStore>()((set) => {
  return {
    habits: [],
    addHabit: (name, frequency, description) =>
      set((state) => {
        return { habits: [...state.habits, { id: Date.now().toString(), name, frequency, description }] };
      }),
  };
});

export default useHabitStore;
