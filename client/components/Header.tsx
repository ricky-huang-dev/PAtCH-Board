type Props = {
  cycleBgStyle: () => void
  bgStyle: string
}

function Header({ cycleBgStyle, bgStyle }: Props) {
  return (
    <>
      <header>
        <button onClick={cycleBgStyle} className="backgroundButton">
          <h1 className={`title t${bgStyle}`}>PAtCHboaRD</h1>
        </button>
      </header>
    </>
  )
}

export default Header
