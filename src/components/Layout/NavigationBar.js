import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Form } from "react-bootstrap"
// IMPORTING IMAGES
import logo from "../../assets/images/minic.png"
import avatar from "../../assets/images/avatar.png"

const NavigationBar = ({
  login,
  setLogin,
  users,
  globalUser,
  setGlobalUser,
}) => {
  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      {/* RETURNING THE MAIN LOGO */}
      <Link to='/'>
        <img src={logo} width={32} height={32} alt='MINIC' />
      </Link>
      {/* BASED ON THE LOGIN STATE IT RETURNS A LOG IN BUTTON OR USERS */}
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
                  {/* MAPPING THROUGH ALL USERS AND YOU CAN CHOOSE WHICH ONE TO USE. BASED ON THEIR STATUS, THE WHOLE WEBSITE CHANGES */}
                  {users.map((user) => (
                    <option key={user.uuid} value={user.role.name}>
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
        <button
          className='btn btn-outline-danger'
          onClick={() => setLogin(!login)}
        >
          LOG IN
        </button>
      )}
    </div>
  )
}

export default NavigationBar
