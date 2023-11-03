function Header({ cycleBgStyle, bgStyle }) {
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
