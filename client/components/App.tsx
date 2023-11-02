import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import StickyNote from './StickyNote'

function App() {
  return (
    <div>
      <Header />
      <Board>
        <StickyNote color={'pink'} />
        <StickyNote color={'blue'} />
        <StickyNote color={'yellow'} />
        <StickyNote color={'green'} />
      </Board>
      <Footer />
    </div>
  )
}

export default App
