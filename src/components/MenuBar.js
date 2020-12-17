import React from "react"
import "./MenuBar.css"

const MenuBar = () => {
  return (
    <div className='py-5 h-100 menu'>
      <h3>MENU</h3>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <a href='/'>Users</a>
        </li>
        <li className='menu__list-item'>
          <a href='/'>Posts</a>
        </li>
        <li className='menu__list-item pt-3'>
          <a href='/' className='btn btn-sm btn-outline-danger'>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
