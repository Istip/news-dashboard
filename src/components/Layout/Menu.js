import React from "react"
import "../../assets/styles/Menu.css"
import { Link } from "react-router-dom"
import { LoginButton } from "./LoginButton"

const Menu = ({ login, setLogin }) => {
  // FUNCTION TO HANDLE THE LOGIN STATE
  // IF YOU ARE LOGGED OUT, IT LOGS YOU IN AND VICE VERSA
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
          <LoginButton onClick={loginHandler}>
            {login ? "Log Out" : "Log In"}
          </LoginButton>
        </li>
      </ul>
    </div>
  )
}

export default Menu
