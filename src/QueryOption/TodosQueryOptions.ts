import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

type Todos = {
  id: number;
  title: string
}

export default function TodosQueryOptions() {
  return queryOptions({
    queryKey: ['Todos'],
    queryFn: async () => {
      const reposnse = await axios.get<Todos[]>("http://localhost:4001/Todos")
      return reposnse.data;
    }
  })
}