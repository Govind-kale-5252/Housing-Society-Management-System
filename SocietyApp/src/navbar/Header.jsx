import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active-link' : ''

  return (
    <nav className='navbar'>
      <Link className="navbar-brand" to="/">Housing Society Management</Link>
      <div className="nav-links">
        <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
        <Link className={`nav-link ${isActive('/post')}`} to="/post">New Person</Link>
        <Link className={`nav-link ${isActive('/getAll')}`} to="/getAll">All Persons</Link>
      </div>
    </nav>
  )
}

export default Header