import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

const getColorInfo = (color: string) => {
  switch (color) {
    case 'Red':
      return { color: 'bg-red-100 text-red-800', text: 'Red' };
    case 'Yellow':
      return { color: 'bg-yellow-100 text-yellow-800', text: 'Yellow' };
    case 'Orange':
      return { color: 'bg-orange-100 text-orange-800', text: 'Orange' };
    case 'Purple':
      return { color: 'bg-purple-100 text-purple-800', text: 'Purple' };
    case 'Green':
      return { color: 'bg-green-100 text-green-800', text: 'Green' };
    case 'Brown':
      return { color: 'bg-amber-100 text-amber-800', text: 'Brown' };
    default:
      return { color: 'bg-gray-100 text-gray-800', text: color };
  }
};

type Fruit = {
  id: number;
  name: string;
  color: string;
  season: string;
};

export const fruitColumns: ColumnDef<Fruit>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => <span className="font-mono">{info.getValue() as number}</span>,
  },
  {
    accessorKey: "name",
    header: "Fruit Name",
    cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: (info) => {
      const color = info.getValue() as string;
      const colorInfo = getColorInfo(color);
      return <Badge className={colorInfo.color}>{colorInfo.text}</Badge>;
    },
  },
  {
    accessorKey: "season",
    header: "Season",
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
];