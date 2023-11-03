import React from 'react'
import StickyNote from './StickyNote'

type Props = {
  bgStyle: string
}

function Board({ bgStyle }: Props) {
  return (
    <div className={`board ${bgStyle}`}>
      <StickyNote color={'pink'} heading={'Groceries'} />
      <StickyNote color={'blue'} heading={'Projects'} />
      <StickyNote color={'yellow'} heading={'Cleaning'} />
      <StickyNote color={'green'} heading={'Activities'} />
    </div>
  )
}

export default Board
