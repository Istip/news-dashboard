import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import UserAdd from "./UserAdd"
import User from "./User"

const UsersTable = ({ users, setUsers }) => {
  return (
    <>
      <h1 className='pb-3'>Users</h1>
      {users.length ? (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <User users={users} setUsers={setUsers} />
          </tbody>
        </Table>
      ) : (
        <div>
          <h3 className='text-danger'>No users to show!</h3>
        </div>
      )}

      <hr />
      <UserAdd users={users} setUsers={setUsers} />
    </>
  )
}

export default UsersTable
