import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'On Deck':
      return { color: 'bg-blue-100 text-blue-800', text: 'On Deck' };
    case 'In Progress':
      return { color: 'bg-yellow-100 text-yellow-800', text: 'In Progress' };
    case 'Testing':
      return { color: 'bg-pink-100 text-pink-800', text: 'Testing' };
    case 'Deployed':
      return { color: 'bg-green-100 text-green-800', text: 'Deployed' };
    default:
      return { color: 'bg-gray-100 text-gray-800', text: status };
  }
};

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
      const statusInfo = getStatusInfo(status);
      return <Badge className={statusInfo.color}>{statusInfo.text}</Badge>;
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