import { Box, Container, Typography } from "@mui/material";
import AddHabbitForm from "./AddHabbitForm";

// import useHabitStore from "@/store/HabitStore";

function HabitTutorial() {
  // const store = useHabitStore();
  // console.log(store);
  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          textAlign={"center"}
        >
          This is Habit Tutorial Page
        </Typography>
        <AddHabbitForm />
      </Box>
    </Container>
  );
}

export default HabitTutorial;
