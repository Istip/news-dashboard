import React from "react"
// IMPORT IMAGES
import logo from "../assets/minic.png"
import avatar from "../assets/avatar.png"

const NavigationBar = () => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      <img src={logo} width={32} height={32} alt='MINIC' />
      <div>
        <a href='/' className='pr-3'>
          John Doe
        </a>
        <img src={avatar} width={32} height={32} alt='AVATAR' />
      </div>
    </div>
  )
}

export default NavigationBar
