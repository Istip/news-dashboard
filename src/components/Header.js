import React from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import { Row, Col } from "react-bootstrap"
// IMPORTING IMAGES
import logo from "../assets/minic.png"
import avatar from "../assets/avatar.png"

const NavigationBar = ({ login, users, globalUser, setGlobalUser }) => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      <Link to='/'>
        <img src={logo} width={32} height={32} alt='MINIC' />
      </Link>
      {login ? (
        <>
          <Row>
            <Col className='p-0 pr-2 m-0'>
              {users.length ? (
                <Form.Control
                  as='select'
                  size='sm'
                  style={{ minWidth: "150px" }}
                  onChange={(e) => setGlobalUser(e.target.value)}
                  value={globalUser}
                >
                  {users.map((user) => (
                    <option key={user.id} value={user.role.name}>
                      {user.firstname} {user.lastname} | {user.role.name}
                    </option>
                  ))}
                </Form.Control>
              ) : (
                ""
              )}
            </Col>
            <Col className='p-0 m-0'>
              <img src={avatar} width={32} height={32} alt='AVATAR' />
            </Col>
          </Row>
        </>
      ) : (
        <a href='/' className='btn btn-outline-danger'>
          LOG IN
        </a>
      )}
    </div>
  )
}

export default NavigationBar
