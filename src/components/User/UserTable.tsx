import { PaginatedTable } from "@/components/CustomComponents/DataTable";
import { userColumns } from "./userColumns";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const UserTable = () => {
  return (
    <PaginatedTable<User>
      title="👥 User Management"
      endpoint="/Users"
      columns={userColumns}
    />
  );
};

export default UserTable
