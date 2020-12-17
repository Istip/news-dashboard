import React from "react"

const User = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user.uuid}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>
            <small>{user.email}</small>
          </td>
        </tr>
      ))}
    </>
  )
}

export default User
