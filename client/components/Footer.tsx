type Props = {
  bgStyle: string
}
function Footer({ bgStyle }: Props) {
  return (
    <>
      <footer className={`f${bgStyle}`}>
        <p>David Gapson Kirsty Ricky © Copyright 2023</p>
      </footer>
    </>
  )
}

export default Footer
