import StickyNote from './StickyNote'

type Props = {
  bgStyle: string
}
// changing board background
function Board({ bgStyle }: Props) {
  return (
    <div className={`board ${bgStyle}`}>
      <StickyNote color={'pink'} type="ToDoList" heading={'Groceries'} />
      <StickyNote color={'blue'} type="ToDoList" heading={'Projects'} />
    </div>
  )
}

export default Board
