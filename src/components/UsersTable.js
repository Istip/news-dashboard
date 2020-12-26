import React from "react"
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
      <h1 className='pb-0'>Users</h1>
      <small>
        <p className='text-muted pt-0 pb-0'>Click user to open modal!</p>
      </small>
      <UserAdd users={users} setUsers={setUsers} />
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
                    className='fas fa-eraser text-danger'
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
    </>
  )
}

export default UsersTable
