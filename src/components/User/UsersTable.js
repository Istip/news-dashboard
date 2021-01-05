import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import UserAdd from "./UserAdd"
import User from "./User"
import UserModal from "./UserModal"

const UsersTable = ({ users, setUsers, globalUser }) => {
  // THIS STATE IS RESPONSIBLE FOR SHOWING / HIDING THE INDIVIDUAL USER'S MODAL
  const [modalShow, setModalShow] = useState(false)

  // DELETE USER FUNCTION TAKES AN ID AND CUTS IT OUT FROM THE EXISTING ARRAY USING THE ARRAY FILTERING JAVASCRIPT FUNCTION
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  // FUNCTION FOR HANDLING AND SAVING THE INPUT FIELDS
  // TAKES THE INDEX OF THE ELEMENT AND SAVES THE ENTERED VALUE BASED OF THE NAME OF THE TARGET. THESE NAMES ARE THE SAME AS OBJECT'S KEY IN THE USERS STATE
  const handleChangeInput = (index, event) => {
    const values = [...users]
    values[index][event.target.name] = event.target.value
    setUsers(values)
  }

  return (
    <>
      <h1 className='pb-0'>Users</h1>
      {users.length ? (
        <small>
          <p className='text-muted pt-0'>
            Click the <i className='fas fa-eye'></i> to open user's modal!
            <br />
            Only users with <b>admin</b> or <b>editor</b> role can edit or
            delete!
          </p>
        </small>
      ) : (
        <small>
          <p className='text-muted pt-0 pb-5'>Add some users please!</p>
        </small>
      )}

      {/* COMPONENT FOR ADDING USERS */}
      <UserAdd users={users} setUsers={setUsers} />

      <hr className='pb-4 mx-5' />

      {/* IF THERE ARE USERS IN THE USERS ARRAY THEN: */}
      {users.length ? (
        <Table striped bordered hover size='sm'>
          {/* THE HEADER OF THE TABLE IS DYNAMIC, RENDERED ONLY ONCE */}
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* THE INDIVIDUAL USER'S COMPONENT, BASED OF THE USERS STATE */}
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <User
                  globalUser={globalUser}
                  handleChangeInput={handleChangeInput}
                  key={index}
                  index={index}
                  user={user}
                  setUsers={setUsers}
                  deleteUser={deleteUser}
                />

                {/* THE MODAL IS GENERATED FOR EVERY INDIVIDUAL USER */}
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
        // IF THERE ARE NO USERS IN THE USERS ARRAY, YOU GET THIS WARNING TEXT
        <div>
          <h3 className='text-danger'>No users to show!</h3>
        </div>
      )}
    </>
  )
}

export default UsersTable
