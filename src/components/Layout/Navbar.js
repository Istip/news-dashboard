import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Form } from "react-bootstrap"

// IMPORT IMAGES
import logo from "../../assets/images/minic.png"
import avatar from "../../assets/images/avatar.png"
import { LoginButton } from "./LoginButton"

// IMPORT GLOBAL USER CONTEXT, 'CAUSE IT WILL BE USED IN THE NAVBAR
import { GlobalUserContext } from "../../context/GlobalUserContext"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

const Navbar = ({ login, setLogin, users }) => {
  // DESTRUCTURING GLOBALUSER & SETGLOBALUSER FROM THE GLOBALUSERCONTEXT'S VALUE
  const [globalUser, setGlobalUser] = useContext(GlobalUserContext)

  return (
    <div className='d-flex justify-content-between p-3 bg-light border border-bottom'>
      {/* RETURNING THE MAIN LOGO */}
      <Link to='/'>
        <img src={logo} width={36} height={36} alt='MINIC' />
      </Link>
      {/* BASED ON THE LOGIN STATE IT RETURNS A LOG IN BUTTON OR USERS */}
      {login ? (
        <>
          <Row>
            <Col className='p-0 pr-0'>
              {users.length ? (
                <Form.Control
                  as='select'
                  style={{ minWidth: "200px" }}
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
            <Col className='pr-2 m-0'>
              <img src={avatar} width={36} height={36} alt='AVATAR' />
            </Col>
          </Row>
        </>
      ) : (
        <LoginButton onClick={() => setLogin(!login)}>Log In</LoginButton>
      )}
    </div>
  )
}

export default Navbar

// DEFAULT PROPS
Navbar.defaultProps = {
  users: [],
}

// VALIDATING PROPTYPES
Navbar.propTypes = {
  login: PropTypes.bool.isRequired,
  setLogin: PropTypes.func,
  users: PropTypes.array,
}
