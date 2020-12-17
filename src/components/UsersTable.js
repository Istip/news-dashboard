import React from "react"
import Table from "react-bootstrap/Table"

const users = [
  { id: 1, firstName: "Admin", lastName: "Doe", nickName: "@adm" },
  { id: 2, firstName: "Editor", lastName: "Doe", nickName: "@edt" },
  { id: 3, firstName: "User", lastName: "Doe", nickName: "@usr" },
  { id: 4, firstName: "Lurker", lastName: "Doe", nickName: "@lkr" },
]

const UsersTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.nickName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable
