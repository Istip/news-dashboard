import React, { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"
import UserModal from "./UserModal"

const User = ({
  user,
  index,
  toastUserEdited,
  handleChangeInput,
  deleteUser,
  globalUser,
}) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <td className='p-3'>
        <p>{user.firstname}</p>
        <InputGroup className='px-5' size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className='fas fa-user'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            disabled={globalUser === "user" ? true : false}
            name='firstname'
            value={user.firstname}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>
      <td className='p-3'>
        <p>{user.lastname}</p>
        <InputGroup className='px-5' size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className='far fa-user'></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            disabled={globalUser === "user" ? true : false}
            name='lastname'
            value={user.lastname}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>
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
            disabled={globalUser !== "admin" ? true : false}
            name='email'
            value={user.email}
            type='text'
            onChange={(event) => handleChangeInput(index, event)}
          />
        </InputGroup>
      </td>
      <td>
        {globalUser !== "user" && (
          <i
            style={{ cursor: "pointer" }}
            className='fas fa-trash text-danger pr-2'
            onClick={() => deleteUser(user.id)}
          ></i>
        )}
        <i
          style={{ cursor: "pointer" }}
          className='fas fa-eye text-primary'
          onClick={() => setModalShow(true)}
        ></i>
      </td>

      <UserModal
        user={user}
        show={modalShow}
        toastUserEdited={toastUserEdited}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default User
