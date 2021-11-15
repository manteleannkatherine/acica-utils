const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        ACI ICA Financial Markets Association World Congress &copy; {year}
      </footer>
    </>
  )
}

export default Footer
