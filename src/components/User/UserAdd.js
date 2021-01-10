import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import uuid from "react-uuid"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

const AddUser = ({ users, setUsers }) => {
  // THE STATE CREATED FOR MAINTAINING THE INPUT FIELDS OF THE FORM
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("user")

  // THE HANDLER FUNCTION FOR THE FORM
  // THE FUNCTION TAKES 'E' AS THE EVENT AND PREVENTS REFRESHING THE PAGE
  //  THEN CREATES A NEW USER BASED ON THE POPULATED INPUT FIELDS AND ADDS THE NEW OBJECT TO THE EXISTING USERS. FINALLY RESETTING THE STATE VALUES TO AN EMPTY STRING, WE GET EMPTY INPUT FIELDS AFTER THE SUBMITTING
  const submitHandler = (e) => {
    e.preventDefault()
    setUsers([
      {
        uuid: uuid(),
        firstname: firstName,
        lastname: lastName,
        email: email,
        role: { id: users.length + 1, name: role },
      },
      ...users,
      // NEW!! NEWLY ADDED USERS ARE IN THE TOP NOW!
    ])
    setFirstName("")
    setLastName("")
    setEmail("")
  }

  return (
    <Container className='text-center py-5' style={{ maxWidth: "500px" }}>
      <h3 className='pb-3'>Add new User</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          {/* THIS IS THE INPUT FOR THE FIRST NAME */}
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
          {/* THIS IS THE INPUT FOR THE LAST NAME */}
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
          {/* THIS IS THE INPUT FOR USER'S EMAIL ADRESS */}
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
          {/* A DROPDOWN MENU TO SELECT THE USER'S ROLE */}
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

        {/* JUST A FANCY SUBMIT BUTTON TO FINISH THE FORM */}
        <Button type='submit'>
          <i className='fas fa-plus-circle pr-2'></i> Add User
        </Button>
      </Form>
    </Container>
  )
}

export default AddUser

// DEFAULT PROPS
AddUser.defaultProps = {
  users: [],
}

// VALIDATING PROP TYPES
AddUser.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
}
