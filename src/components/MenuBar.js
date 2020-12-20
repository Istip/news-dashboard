import React, { useState } from "react"
import "./MenuBar.css"
import { Link } from "react-router-dom"

const MenuBar = () => {
  const [login, setLogin] = useState(true)

  const loginHandler = (e) => {
    e.preventDefault()
    setLogin(!login)
  }

  return (
    <div className='py-5 h-100 menu'>
      <h3>MENU</h3>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          {/* <a href='/'>Users</a> */}
          <Link to='/'>Users</Link>
        </li>
        <li className='menu__list-item'>
          {/* <a href='/'>Posts</a> */}
          <Link to='/posts'>Posts</Link>
        </li>
        <li className='menu__list-item pt-3'>
          <a
            href='/'
            className='btn btn-sm btn-outline-danger'
            onClick={loginHandler}
          >
            {login ? "Log Out" : "Log In"}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
