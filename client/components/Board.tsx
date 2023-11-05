import StickyNote from './StickyNote'

type Props = {
  bgStyle: string
}

function Board({ bgStyle }: Props) {
  return (
    <div className={`board ${bgStyle}`}>
      <StickyNote color={'pink'} type="ToDoList" heading={'Groceries'} />
      <StickyNote color={'blue'} type="ToDoList" heading={'Projects'} />
      <StickyNote color={'green'} type="ToDoList" heading={'Activities'} />
      <StickyNote color={'yellow'} type="Slideshow" heading={'Cats'} />
    </div>
  )
}

export default Board
