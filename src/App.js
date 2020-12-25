import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import MenuBar from "./components/MenuBar"

import UsersTable from "./components/UsersTable"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PostsTable from "./components/PostsTable"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function App() {
  // USERS STATE
  const [users, setUsers] = useState([
    {
      id: "02cd14b3-98ad-3b3d-bd57-95166a95f9cb",
      firstname: "Admin",
      lastname: "Doe",
      email: "admin.doe@gmail.com",
      role: {
        id: 1,
        name: "admin",
      },
    },
    {
      id: "20951f4a-45b6-3284-bc36-a13747b17cb3",
      firstname: "Editor",
      lastname: "Doe",
      email: "editor.doe@gmail.com",
      role: {
        id: 2,
        name: "editor",
      },
    },
    {
      id: "c68344cb-0f6f-3fd3-baad-0131f48cf7bb",
      firstname: "User",
      lastname: "Doe",
      email: "user.doe@gmail.com",
      role: {
        id: 3,
        name: "user",
      },
    },
  ])

  const [login, setLogin] = useState(true)

  return (
    <div className='App'>
      <Router>
        <Header login={login} setLogin={setLogin} />
        <Container fluid>
          <Row>
            <Col sm={4} md={4} lg={2}>
              <MenuBar login={login} setLogin={setLogin} />
            </Col>
            <Col className='my-auto pt-3'>
              <Switch>
                <Route path='/' exact>
                  <div>
                    <h1 className='display-3'>Welcome!</h1>
                  </div>
                </Route>
                <Route path='/users' exact>
                  <UsersTable users={users} setUsers={setUsers} />
                </Route>
                <Route path='/posts'>
                  <PostsTable />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
