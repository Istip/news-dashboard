import React from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import { Row, Col } from "react-bootstrap"
// IMPORTING IMAGES
import logo from "../assets/minic.png"
import avatar from "../assets/avatar.png"

const NavigationBar = ({ login, users }) => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      <Link to='/'>
        <img src={logo} width={36} height={36} alt='MINIC' />
      </Link>
      {login ? (
        <>
          <Row>
            {/* <a href='/' className='pr-3'>
              Admin Doe
            </a> */}
            <Col className='p-0 pr-2 m-0'>
              <Form.Control as='select' style={{ minWidth: "150px" }}>
                {users.map((user) => (
                  <option key={user.id} value={user.firstname}>
                    {user.firstname} {user.lastname}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col className='p-0 m-0'>
              <img src={avatar} width={36} height={36} alt='AVATAR' />
            </Col>
          </Row>
        </>
      ) : (
        <a href='/' className='btn btn-sm btn-outline-danger'>
          Log in
        </a>
      )}
    </div>
  )
}

export default NavigationBar
