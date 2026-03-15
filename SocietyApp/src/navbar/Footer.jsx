
const Footer = () => {
  const currentYear = new Date().getFullYear() // This will show 2025
  
  return (
    <footer className='footer bg-dark'>
      <div className='container text-center'>
        <span>© {currentYear} Housing Society Management | Govind Kale</span>
      </div>
    </footer>
  )
}

export default Footer