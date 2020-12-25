import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function UserModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='edit-modal-centered' centered>
      <Modal.Header closeButton>
        <Modal.Title id='edit-modal-centered'>
          <h3>
            {props.user.firstname} {props.user.lastname}
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <small>
          <p className='text-center'>
            <b>ID: </b>
            {props.user.id}
          </p>
        </small>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          maiores consequuntur quisquam rem dolorum quod porro numquam minus
          doloribus. Minima.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserModal
