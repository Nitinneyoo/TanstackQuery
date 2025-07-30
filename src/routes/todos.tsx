// src/routes/todos.tsx
import { createFileRoute } from '@tanstack/react-router'
import TodosScreen from '@/TodosPage/TodosScreen'
import { Suspense } from 'react'
import TodosQueryOptions from '@/QueryOption/TodosQueryOptions'
import { queryClient } from '@/lib/queryClient'

export const Route = createFileRoute('/todos')({
  component: TodosComponent,
  loader: () => queryClient.ensureQueryData(TodosQueryOptions()),
})

function TodosComponent() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-muted-foreground">Loading todos...</div>
        </div>
      }
    >
      <TodosScreen />
    </Suspense>
  )
}
