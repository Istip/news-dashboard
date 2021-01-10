import React, { useState } from "react"
import UserModal from "./UserModal"

// IMPORTING BOOTSTRAP COMPONENTS
import { InputGroup, FormControl } from "react-bootstrap"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

// IMPORT NOTIFICATION FUNCTION IT WILL BE USED IN THIS COMPONENT
import { notify } from "../Utils/Notification"

const User = ({ user, index, handleChangeInput, deleteUser }) => {
  // THIS STATE IS RESPONSIBLE FOR SHOWING / HIDING THE INDIVIDUAL USER'S MODAL
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      {/* FIRST TABLE CELL FOR DISPLAYING AND EDITING USER'S FIRST NAME */}
      <td className='p-3'>
        <p>{user.firstname}</p>
        <InputGroup className='px-5' size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className='fas fa-user'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name='firstname'
            value={user.firstname}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>

      {/* SECOND TABLE CELL FOR DISPLAYING AND EDITING USER'S LAST NAME */}
      <td className='p-3'>
        <p>{user.lastname}</p>
        <InputGroup className='px-5' size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className='far fa-user'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name='lastname'
            value={user.lastname}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>

      {/* THIRD TABLE CELL FOR DISPLAYING AND EDITING USER'S EMAIL ADRESS */}
      <td className='p-3'>
        <p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <InputGroup className='px-5' size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className='fas fa-at'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name='email'
            value={user.email}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>

      {/* LAST CELL IS THE ACTIONS CELL TO DELETE OR PREVIEW USER'S PROFILE*/}
      <td>
        <i
          style={{ cursor: "pointer" }}
          className='fas fa-trash text-danger pr-2'
          onClick={() => deleteUser(user.uuid)}
          onMouseUp={() => notify("User removed!", "BF0000")}
        ></i>

        {/* SHOW USER'S PROFILE IN MODAL, AVAILABLE FOR EVERY USER LOGGED IN */}
        <i
          style={{ cursor: "pointer" }}
          className='fas fa-eye text-primary'
          onClick={() => setModalShow(true)}
        ></i>
      </td>

      {/* USER MODAL HAD TO BE NESTED INTO THE INDIVIDUAL USER */}
      <UserModal
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default User

// VALIDATING PROP TYPES
User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleChangeInput: PropTypes.func,
  deleteUser: PropTypes.func,
}
