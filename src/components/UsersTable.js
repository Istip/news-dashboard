import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import UserAdd from "./UserAdd"
import User from "./User"
import UserModal from "./UserModal"
// TOASTIFY FOR REACT
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UsersTable = ({ users, setUsers }) => {
  const [modalShow, setModalShow] = useState(false)
  // DELETE USER FUNCTION
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    toast.error("User has been removed!")
  }

  const toastUserAdded = () => toast.success("New user added!")

  const handleChangeInput = (index, event) => {
    const values = [...users]
    values[index][event.target.name] = event.target.value
    setUsers(values)
  }

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
        <p className='text-muted pt-0 pb-5'>
          Click the <i className='fas fa-eye'></i> to open user's modal!
        </p>
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
            {users.map((user, index) => (
              <tr key={index}>
                <User
                  handleChangeInput={handleChangeInput}
                  key={index}
                  index={index}
                  user={user}
                  setUsers={setUsers}
                  deleteUser={deleteUser}
                />
                <UserModal
                  user={user}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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
