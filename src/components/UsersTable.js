import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import AddUser from "./AddUser"
import User from "./User"

const UsersTable = () => {
  const [users, setUsers] = useState([
    {
      uuid: "02cd14b3-98ad-3b3d-bd57-95166a95f9cb",
      firstname: "Admin",
      lastname: "Doe",
      email: "admin.doe@gmail.com",
      role: {
        id: 1,
        name: "admin",
      },
    },
    {
      uuid: "20951f4a-45b6-3284-bc36-a13747b17cb3",
      firstname: "Editor",
      lastname: "Doe",
      email: "editor.doe@gmail.com",
      role: {
        id: 2,
        name: "editor",
      },
    },
    {
      uuid: "c68344cb-0f6f-3fd3-baad-0131f48cf7bb",
      firstname: "User",
      lastname: "Doe",
      email: "user.doe@gmail.com",
      role: {
        id: 3,
        name: "user",
      },
    },
  ])

  return (
    <>
      <h1 className='pb-3'>Users</h1>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>
          <User users={users} setUsers={setUsers} />
        </tbody>
      </Table>
      <hr />
      <AddUser users={users} setUsers={setUsers} />
    </>
  )
}

export default UsersTable
