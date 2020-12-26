import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

function UserModal(props) {
  const [userFirstName, setUserFirstName] = useState(props.user.firstname)
  const [userLastName, setUserLastName] = useState(props.user.lastname)
  const [userEmail, setUserEmail] = useState(props.user.email)

  const handleSubmit = () => {
    props.user.firstname = userFirstName
    props.user.lastname = userLastName
    props.user.email = userEmail
  }

  return (
    <Modal {...props} size='lg' aria-labelledby='edit-modal-centered' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='edit-modal-centered'>
            <h3>
              {userFirstName} {userLastName}
            </h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <small>
            <p className='text-center text-muted'>
              <b>ID: </b>
              {props.user.id}
            </p>
          </small>

          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              onChange={(e) => setUserFirstName(e.target.value)}
              required
              value={userFirstName}
              name='firstname'
              type='text'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              onChange={(e) => setUserLastName(e.target.value)}
              required
              value={userLastName}
              name='lastname'
              type='text'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              onChange={(e) => setUserEmail(e.target.value)}
              required
              value={userEmail}
              name='email'
              type='email'
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default UserModal
