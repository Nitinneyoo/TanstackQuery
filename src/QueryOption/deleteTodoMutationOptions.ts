import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "@/lib/queryClient";

export function useDeleteTodoMutation() {
  return useMutation({
    mutationFn: async (todoId: string) => {
      await axios.delete(`http://localhost:4001/Todos/${todoId}`);
      return todoId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
    },
  });
}
