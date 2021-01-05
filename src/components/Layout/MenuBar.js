import React from "react"
import "../../assets/styling/MenuBar.css"
import { Link } from "react-router-dom"

const MenuBar = ({ login, setLogin }) => {
  // FUNCTION TO HANDLE THE LOGGED STATE
  const loginHandler = (e) => {
    e.preventDefault()
    setLogin(!login)
  }

  return (
    <div className='py-5 h-100 menu'>
      <h3>MENU</h3>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <Link to='/users'>Users</Link>
        </li>
        <li className='menu__list-item'>
          <Link to='/posts'>Posts</Link>
        </li>
        <li className='menu__list-item pt-3'>
          <div className='btn btn-sm btn-outline-danger' onClick={loginHandler}>
            {login ? "Log Out" : "Log In"}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar