import { PaginatedTable } from "@/components/CustomComponents/DataTable";
import { fruitColumns } from "./fruitColumns";

type Fruit = {
  id: number;
  name: string;
  color: string;
  season: string;
};

export default function FruitsPage() {
  return (
    <PaginatedTable<Fruit>
      title="🍎 Fruits Catalog"
      endpoint="/Fruits"
      columns={fruitColumns}
    />
  );
}
