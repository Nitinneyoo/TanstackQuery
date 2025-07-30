import { queryOptions } from "@tanstack/react-query"
import axios from "axios"

type Todos = {
  id: string
  title: string
}

export default function TodosQueryOptions() {
  return queryOptions({
    queryKey: ["Todos"],
    queryFn: async () => {
      const response = await axios.get<Todos[]>("http://localhost:4001/Todos")
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}