import React, { useState } from "react"
import UserModal from "./UserModal"

const User = ({ users, setUsers }) => {
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>
            <small>{user.email}</small>
          </td>
          <td className='text-center'>
            <i
              className='fas fa-trash pr-3 text-danger'
              onClick={() => deleteUser(user.id)}
            ></i>
            <i
              className='fas fa-edit text-primary'
              onClick={() => setModalShow(true)}
            ></i>
          </td>
        </tr>
      ))}
      <UserModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default User
