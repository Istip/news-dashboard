import React, { Fragment } from "react"
import Table from "react-bootstrap/Table"
import UserAdd from "./UserAdd"
import User from "./User"

const UsersTable = ({ users, setUsers }) => {
  // DELETE USER FUNCTION
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ cursor: "pointer" }}>
                <User key={user.id} user={user} setUsers={setUsers} />
                <td>
                  <i
                    className='fas fa-trash'
                    onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
              </tr>
            ))}
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
