import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

const AddUser = () => {
  return (
    <Container className='text-center py-5' style={{ maxWidth: "500px" }}>
      <h3 className='pb-3'>Add new User</h3>
      <Form>
        <Form.Group>
          <Form.Control type='text' placeholder='Enter First Name' />
        </Form.Group>

        <Form.Group>
          <Form.Control type='text' placeholder='Enter Last Name' />
        </Form.Group>

        <Form.Group>
          <Form.Control type='email' placeholder='Enter Email Adress' />
        </Form.Group>

        <Button variant='secondary' type='submit'>
          <i class='fas fa-plus-circle'></i> Add
        </Button>
      </Form>
    </Container>
  )
}

export default AddUser
