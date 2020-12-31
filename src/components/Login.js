import React from "react"

const Login = ({ page }) => {
  return (
    <div className='pt-5'>
      <h1 className='display-3'>WELCOME</h1>
      <h4 className='text-muted'>
        to the <span className='text-danger'>{page}</span> page
      </h4>
      <p className='pt-3 text-primary'>Please log in to use the app!</p>
    </div>
  )
}

export default Login
