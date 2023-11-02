import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import StickyNote from './StickyNote'

function App() {
  return (
    <div>
      <Header />
      <Board>
        <StickyNote color={'pink'} heading={'Groceries'} />
        <StickyNote color={'blue'} heading={'Projects'} />
        <StickyNote color={'yellow'} heading={'Cleaning'} />
        <StickyNote color={'green'} heading={'Activities'} />
      </Board>
      <Footer />
    </div>
  )
}

export default App
