import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
          <p className='text-center text-muted'>
            <b>ID: </b>
            {props.user.id}
          </p>
        </small>
        <Row>
          <Col className='text-right'>First Name:</Col>
          <Col className='text-left'>
            <b>{props.user.firstname}</b>
          </Col>
        </Row>
        <Row>
          <Col className='text-right'>Last Name:</Col>
          <Col className='text-left'>
            <b>{props.user.lastname}</b>
          </Col>
        </Row>
        <Row>
          <Col className='text-right'>E-mail adress:</Col>
          <Col className='text-left'>
            <b>{props.user.email}</b>
          </Col>
        </Row>
        <hr className='mx-5' />
        <Row>
          <Col className='text-right'>User's role:</Col>
          <Col className='text-left'>
            <b>
              {props.user.role.name === "admin" ? (
                <>
                  <i className='fas fa-crown pr-1'></i> {props.user.role.name}
                </>
              ) : (
                <>{props.user.role.name}</>
              )}
            </b>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserModal
