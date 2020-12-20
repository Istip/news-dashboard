import React from "react"

const User = ({ users, setUsers }) => {
  const deleteUser = () => {
    setUsers(users.filter((user) => user.id !== users.id))
  }

  return (
    <>
      {users.map((user) => (
        <tr key={user.uuid}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>
            <small>{user.email}</small>
          </td>
          <td>
            <i
              className='fas fa-trash pr-3 text-danger'
              onClick={deleteUser}
            ></i>
            <i className='fas fa-edit text-primary'></i>
          </td>
        </tr>
      ))}
    </>
  )
}

export default User
