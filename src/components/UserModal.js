import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

function UserModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='edit-modal-centered' centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id='edit-modal-centered'>
            <h3>
              {props.user.firstname} {props.user.lastname}
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
              required
              value={props.user.firstname}
              name='firstname'
              type='text'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              required
              value={props.user.lastname}
              name='lastname'
              type='text'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              value={props.user.email}
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
