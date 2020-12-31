import React from "react"
import { Link } from "react-router-dom"
// IMPORTING IMAGES
import logo from "../assets/minic.png"
import avatar from "../assets/avatar.png"

const NavigationBar = ({ login }) => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      <Link to='/'>
        <img src={logo} width={32} height={32} alt='MINIC' />
      </Link>
      {login ? (
        <>
          <div>
            <a href='/' className='pr-3'>
              Admin Doe
            </a>
            <img src={avatar} width={32} height={32} alt='AVATAR' />
          </div>
        </>
      ) : (
        <a href='/' className='btn btn-sm btn-outline-danger'>
          Log in
        </a>
      )}
    </div>
  )
}

export default NavigationBar
