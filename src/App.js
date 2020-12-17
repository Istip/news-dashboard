import React from "react"
import "./App.css"
import Header from "./components/Header"
import MenuBar from "./components/MenuBar"
// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import UsersTable from "./components/UsersTable"

function App() {
  return (
    <div className='App'>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={4} md={4} lg={2}>
            <MenuBar />
          </Col>
          <Col className='my-auto pt-3'>
            <h1>News Dashboard</h1>
            <p className='lead'>Welcome ADMIN!</p>
            <UsersTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
