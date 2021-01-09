import React from "react"

function Admin() {
  return (
    <div className='px-5'>
      <h1>
        Only users with <b className='text-danger'>admin</b> role can enter this
        page!
      </h1>
    </div>
  )
}

export default Admin
