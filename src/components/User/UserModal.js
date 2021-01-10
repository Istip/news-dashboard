import React from "react"

// IMPORT REACT BOOTSTRAP COMPONENTS
import { Button, Modal, Row, Col } from "react-bootstrap"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

function UserModal(props) {
  // THIS COMPONENT RENDERS EVERY INDIVIDUAL USER'S INFO TO PREVIEW
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
          <p className='text-center text-muted'>ID: {props.user.uuid}</p>
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
                // IF YOU HAVE ADMIN ROLE, YOU GET A LITTLE CROWN
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

// VALIDATING PROP TYPES
UserModal.propTypes = {
  user: PropTypes.object,
  show: PropTypes.bool,
}
