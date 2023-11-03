import SlideShow from './Slideshow'
import ToDoList from './ToDoList'

type Props = {
  color: string
  heading: string
  type: 'ToDoList' | 'Slideshow'
}

function StickyNote(props: Props) {
  return (
    <div className={`stickyNote ${props.color}`}>
      {props.type === 'Slideshow' && <SlideShow heading={props.heading} />}
      {props.type === 'ToDoList' && <ToDoList heading={props.heading} />}
    </div>
  )
}

export default StickyNote
