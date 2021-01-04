import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import uuid from "react-uuid"

const AddUser = ({ users, setUsers, toastUserAdded }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("user")

  const submitHandler = (e) => {
    e.preventDefault()
    setUsers([
      ...users,
      {
        id: uuid(),
        firstname: firstName,
        lastname: lastName,
        email: email,
        role: { id: users.length + 1, name: role },
      },
    ])
    setFirstName("")
    setLastName("")
    setEmail("")
    toastUserAdded()
  }

  return (
    <Container className='text-center py-5' style={{ maxWidth: "500px" }}>
      <h3 className='pb-3'>Add new User</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            required
            value={firstName}
            name='firstName'
            type='text'
            placeholder='Enter First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            required
            value={lastName}
            name='lastName'
            type='text'
            placeholder='Enter Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            required
            value={email}
            name='email'
            type='email'
            placeholder='Enter Email Adress'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select new user's role:</Form.Label>
          <Form.Control
            as='select'
            required
            value={role}
            name='role'
            placeholder='Enter Email Adress'
            onChange={(e) => setRole(e.target.value)}
          >
            <option>user</option>
            <option>editor</option>
            <option>admin</option>
          </Form.Control>
        </Form.Group>

        <Button type='submit'>
          <i className='fas fa-plus-circle pr-2'></i> Add User
        </Button>
      </Form>
    </Container>
  )
}

export default AddUser
