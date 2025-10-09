import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

const getRoleInfo = (role: string) => {
  switch (role) {
    case 'Admin':
      return { color: 'bg-red-100 text-red-800', text: 'Admin' };
    case 'Manager':
      return { color: 'bg-yellow-100 text-yellow-800', text: 'Manager' };
    default:
      return { color: 'bg-green-100 text-green-800', text: role };
  }
};

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => <span className="font-mono">{info.getValue() as number}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => <span className="text-blue-600">{info.getValue() as string}</span>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => {
      const role = info.getValue() as string;
      const roleInfo = getRoleInfo(role);
      return <Badge className={roleInfo.color}>{roleInfo.text}</Badge>;
    },
  },
];