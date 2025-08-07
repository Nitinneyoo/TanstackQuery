import { PaginatedTable } from "../components/CustomComponents/DataTable";
import { taskColumns } from "./taskColumns";

type Task = {
  id: number;
  task: string;
  status: string;
  due: string;
  notes: string;
};

const TaskTable = () => {
  return (
    <PaginatedTable<Task>
      title="✅ Task Management"
      endpoint="/Tasks"
      columns={taskColumns}
    />
  );
};

export default TaskTable;
