import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
      <Link className="navbar-logo" to='/' >
        Home
      </Link>
      <Link className="navbar-logo" to='/burger' >
        Burger
      </Link>
    </div>
    </>
  )
}