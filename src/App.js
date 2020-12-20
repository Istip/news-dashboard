import React from "react"
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
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container fluid>
          <Row>
            <Col sm={4} md={4} lg={2}>
              <MenuBar />
            </Col>
            <Col className='my-auto pt-3'>
              <Switch>
                <Route path='/' exact>
                  <UsersTable />
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
