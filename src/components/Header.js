import React from "react"
// IMPORT IMAGES
import logo from "../assets/minic.png"
import avatar from "../assets/avatar.png"

const NavigationBar = ({ login }) => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      <img src={logo} width={32} height={32} alt='MINIC' />
      {login ? (
        <>
          <div>
            <a href='/' className='pr-3'>
              John Doe
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
