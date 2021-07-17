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
        <Link className="navbar-logo" to='/popup' >
          PopUp
        </Link>
        <Link className="navbar-logo" to='/pagination' >
          Dynamic Pagination
        </Link>
        <Link className="navbar-logo" to='/dragndrop' >
          Dragndrop
        </Link>
        <Link className="navbar-logo" to='/dragndropadvance' >
          DragndropAdvance
        </Link>
      </div>
    </>
  )
}