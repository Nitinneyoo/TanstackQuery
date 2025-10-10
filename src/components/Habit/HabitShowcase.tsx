import { Box, Card } from "@mui/material";
import useHabitStore from "@/store/HabitStore";

const HabitShowcase = () => {
  return (
    <div>
      <Card>
        <Box className="p-4 border-2">
          <h2 className="text-xl font-bold mb-2">Current Habits</h2>
          {useHabitStore.getState().habits.length === 0 ? (
            <p>No habits added yet.</p>
          ) : (
            <ul className="list-disc list-inside">
              {useHabitStore.getState().habits.map((habit) => (
                <li key={habit.id}>
                  <strong>{habit.name}</strong> - {habit.frequency}
                  {habit.description && (
                    <p className="text-sm text-gray-600">{habit.description}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default HabitShowcase;
