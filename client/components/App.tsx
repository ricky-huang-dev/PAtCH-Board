import { useState } from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'

function App() {
  const [bgIndex, setBgIndex] = useState(0)

  // array of background image styles
  const backgroundList = ['', 'ruledLines', 'zigzag', 'polka', 'cross']

  // function to swap background images
  function cycleBackground() {
    if (bgIndex === backgroundList.length - 1) {
      setBgIndex(0)
    } else {
      setBgIndex(bgIndex + 1)
    }
  }

  return (
    <div>
      <Header cycleBgStyle={cycleBackground} />
      <Board bgStyle={backgroundList[bgIndex]}></Board>
      <Footer />
    </div>
  )
}

export default App
