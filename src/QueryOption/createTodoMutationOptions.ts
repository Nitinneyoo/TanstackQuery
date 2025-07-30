import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "@/lib/queryClient";

export function useCreateTodoMutation(onSuccess?: () => void) {
  return useMutation({
    mutationFn: async (title: string) => {
      const response = await axios.post("http://localhost:4001/Todos", { title });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
      onSuccess?.();
    },
  });
}
