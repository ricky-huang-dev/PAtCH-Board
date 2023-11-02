import ToDoList from './ToDoList'

type Props = {
  color: string
  heading: string
}

function StickyNote(props: Props) {
  return (
    <div className={`stickyNote ${props.color}`}>
      <ToDoList heading={props.heading} />
    </div>
  )
}

export default StickyNote
