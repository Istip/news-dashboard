import React from "react"

const Login = ({ page }) => {
  return (
    <div className='pt-5'>
      <h1 className='display-3'>WELCOME</h1>
      <h4 className='text-muted'>
        to the{" "}
        <b>
          <span className='text-danger'>{page}</span>
        </b>{" "}
        page
      </h4>
      <p className='pt-3 text-primary'>
        <b>Please log in to use the app!</b>
      </p>
    </div>
  )
}

export default Login
