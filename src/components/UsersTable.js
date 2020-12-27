import React from "react"
import Table from "react-bootstrap/Table"
import UserAdd from "./UserAdd"
import User from "./User"
// TOASTIFY FOR REACT
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UsersTable = ({ users, setUsers }) => {
  // DELETE USER FUNCTION
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    toast.error("User has been removed!")
  }

  const toastUserAdded = () => toast.success("New user added!")
  const toastUserEdited = () => toast.success("Saved!")

  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className='pb-0'>Users</h1>
      <small>
        <p className='text-muted pt-0 pb-0'>Click user to open modal!</p>
      </small>
      <UserAdd
        users={users}
        setUsers={setUsers}
        toastUserAdded={toastUserAdded}
      />
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
                <User
                  key={user.id}
                  user={user}
                  setUsers={setUsers}
                  toastUserEdited={toastUserEdited}
                />
                <td>
                  <i
                    className='fas fa-trash text-danger'
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
