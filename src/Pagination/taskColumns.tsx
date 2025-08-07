import type { ColumnDef } from "@tanstack/react-table";

type Task = {
  id: number;
  task: string;
  status: string;
  due: string;
  notes: string;
};

export const taskColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => <span className="font-mono">{info.getValue() as number}</span>,
  },
  {
    accessorKey: "task",
    header: "Task",
    cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as string;
      return (
        <span className={`px-2 py-1 rounded text-xs ${
          status === 'On Deck' ? 'bg-blue-100 text-blue-800' :
          status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
          status === 'Testing' ? 'bg-pink-100 text-pink-800' :
          status === 'Deployed' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "due",
    header: "Due Date",
    cell: (info) => {
      const due = info.getValue() as string;
      return <span className="text-gray-600">{new Date(due).toLocaleDateString()}</span>;
    },
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (info) => <span className="text-sm text-gray-500">{info.getValue() as string}</span>,
  },
];