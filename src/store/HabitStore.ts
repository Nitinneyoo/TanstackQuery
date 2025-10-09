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
        const newHabit: Habit = {
          id: state.habits.length + 1,
          title: name,
          description: description,
          completed: false,
          frequency,
          name,
          createdAt: new Date().toISOString(),
          completedDates: [],
        };
        // console.log("Adding new habit:", newHabit);

        return { habits: [...state.habits, newHabit] };
      }),
  };
});

export default useHabitStore;
