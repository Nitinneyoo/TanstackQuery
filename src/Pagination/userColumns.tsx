import type { ColumnDef } from "@tanstack/react-table";

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
    cell: (info) => (
      <span className={`px-2 py-1 rounded text-xs ${
        (info.getValue() as string) === 'Admin' ? 'bg-red-100 text-red-800' :
        (info.getValue() as string) === 'Manager' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {info.getValue() as string}
      </span>
    ),
  },
];