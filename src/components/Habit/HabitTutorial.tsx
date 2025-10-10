import { Box, Container, Typography } from "@mui/material";
import AddHabbitForm from "./AddHabbitForm";
import HabitShowcase from "./HabitShowcase";

function HabitTutorial() {
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
        <div className="my-8">

          <HabitShowcase />
        </div>
      </Box>
    </Container>
  );
}

export default HabitTutorial;
