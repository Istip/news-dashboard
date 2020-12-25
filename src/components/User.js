import React, { useState } from "react"

import UserModal from "./UserModal"

const User = ({ user }) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <td onClick={() => setModalShow(true)}>{user.firstname}</td>
      <td onClick={() => setModalShow(true)}>{user.lastname}</td>
      <td onClick={() => setModalShow(true)}>
        <small>{user.email}</small>
      </td>

      <UserModal
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default User
