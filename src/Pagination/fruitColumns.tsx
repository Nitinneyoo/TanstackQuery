import type { ColumnDef } from "@tanstack/react-table";

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
      return (
        <span className={`px-2 py-1 rounded text-xs ${
          color === 'Red' ? 'bg-red-100 text-red-800' :
          color === 'Yellow' ? 'bg-yellow-100 text-yellow-800' :
          color === 'Orange' ? 'bg-orange-100 text-orange-800' :
          color === 'Purple' ? 'bg-purple-100 text-purple-800' :
          color === 'Green' ? 'bg-green-100 text-green-800' :
          color === 'Brown' ? 'bg-amber-100 text-amber-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {color}
        </span>
      );
    },
  },
  {
    accessorKey: "season",
    header: "Season",
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
];