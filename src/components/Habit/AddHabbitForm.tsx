import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useHabitStore from "@/store/HabitStore";

const AddHabbitForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
    "daily",
  );

  const { habits, addHabit } = useHabitStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      addHabit(name, frequency, description)
      setName('')
    }
  }

  return (
    <form className="flex flex-col gap-4 p-4 border rounded-lg shadow-md bg-white" onSubmit={handleSubmit}>
      <Box className="flex flex-col gap-4">
        <TextField
          label="Habit Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
          <Select
            labelId="imple-select-label"
            id="simple-select"
            value={frequency}
            label="Frequency"
            onChange={(e) =>
              setFrequency(e.target.value as "daily" | "weekly" | "monthly")
            }
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>

        <TextareaAutosize
          aria-label="minimum height"
          value={description}
          minRows={3}
          style={{ width: "100%", padding: "8px", fontSize: "16px", outline: "1px solid #c4c4c4", borderRadius: "4px" }}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            4

            // Call the addHabit function from the store
            useHabitStore.getState().addHabit(name, frequency, description);
            // Reset form fields
            setName("");
            setFrequency("daily");
            setDescription("");
          }}
        >
          Add Habbit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabbitForm;
