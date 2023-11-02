import ToDoList from './ToDoList'

type Props = {
  color: string
}

function StickyNote(props: Props) {
  return (
    <div className={`stickyNote ${props.color}`}>
      <ToDoList />
    </div>
  )
}

export default StickyNote
