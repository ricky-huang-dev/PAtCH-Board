import { useState } from 'react'

type Props = {
  heading: string
}

function SlideShow(props: Props) {
  const images = ['/cat1.png', '/cat2.png', '/cat3.png', '/cat4.png']
  const [imgIndex, setImgIndex] = useState(0)

  function cycleImages() {
    if (imgIndex === images.length - 1) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
    }
  }
  return (
    <div className="SlideshowContainer">
      <div className="slides">
        <button type="submit" className="slideButton" onClick={cycleImages}>
          <img className={'img'} alt="cats" src={images[imgIndex]} />
        </button>
      </div>
    </div>
  )
}

export default SlideShow
