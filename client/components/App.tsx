import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import StickyNote from './StickyNote'

function App() {
  return (
    <div>
      <Header />
      <Board>
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
      </Board>
      <Footer />
    </div>
  )
}

export default App
