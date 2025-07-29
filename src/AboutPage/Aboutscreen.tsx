import TodosQueryOptions from "@/QueryOption/TodosQueryOptions"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function Aboutscreen() {

  const { data, isLoading, isError, error } = useSuspenseQuery(TodosQueryOptions())

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div className="p-2 ">
      <div>
        <h3 className="text-3xl font-bold mb-4">Welcome To About Screen!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((Todos: any) => (
            <div key={Todos.id} className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">{Todos.id}</h4>
              <p className="text-sm text-gray-900">Title : {Todos.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}