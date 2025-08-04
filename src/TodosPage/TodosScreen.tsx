// src/TodosPage/TodosScreen.tsx
import { useQuery } from "@tanstack/react-query";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTodoMutation } from "@/QueryOption/createTodoMutationOptions";
import { useDeleteTodoMutation } from "@/QueryOption/deleteTodoMutationOptions";
import TodosQueryOptions from "@/QueryOption/TodosQueryOptions";

export default function TodosScreen() {
  const [newTodo, setNewTodo] = useState("");
  const { data: todos, isLoading } = useQuery(TodosQueryOptions());

  const { mutate: createTodo, isPending: isCreating } = useCreateTodoMutation(
    () => {
      setNewTodo("");
    },
  );

  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodoMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-muted-foreground">Loading todos...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Todos</h1>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow"
        />
        <Button
          onClick={() => createTodo(newTodo)}
          disabled={isCreating || !newTodo}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          <span>{isCreating ? "Adding..." : "Add Todo"}</span>
        </Button>
      </div>

      <div className="space-y-4">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="bg-card text-card-foreground rounded-lg border p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="font-medium">{todo.title}</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full h-8 w-8"
              onClick={() => deleteTodo(todo.id)}
              disabled={isDeleting}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete todo</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
