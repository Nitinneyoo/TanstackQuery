interface TodoProps {
  title: string
}
const Todo: React.FC<TodoProps> = (props) => {
  return (
    <li>
      {props.title}
    </li>
  )
}

export default Todo