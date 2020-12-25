import React, { useState } from "react"
import UserModal from "./UserModal"

const User = ({ users, setUsers }) => {
  const [modalShow, setModalShow] = useState(false)

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <>
      {users.map((user, index) => (
        <>
          <tr key={index} style={{ cursor: "pointer" }}>
            <td onClick={() => setModalShow(true)}>{user.firstname}</td>
            <td onClick={() => setModalShow(true)}>{user.lastname}</td>
            <td onClick={() => setModalShow(true)}>
              <small>{user.email}</small>
            </td>
            <td className='text-center'>
              <i
                className='fas fa-trash pr-3 text-danger'
                onClick={() => deleteUser(user.id)}
              ></i>
              {/* <i className='fas fa-edit text-primary'></i> */}
            </td>
          </tr>
          <UserModal
            user={user}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      ))}
    </>
  )
}

export default User
