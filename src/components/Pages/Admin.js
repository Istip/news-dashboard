import React from "react"

function Admin() {
  return (
    <div className='px-5'>
      <h3>
        Only users with{" "}
        <span className='text-danger'>
          <b>admin</b>
        </span>{" "}
        role can enter this page!
      </h3>
    </div>
  )
}

export default Admin
