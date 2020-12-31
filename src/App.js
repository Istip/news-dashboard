import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// PROJECT COMPONENTS
import Header from "./components/Header"
import MenuBar from "./components/MenuBar"
import UsersTable from "./components/UsersTable"
import PostsTable from "./components/PostsTable"
import PostPreview from "./components/PostPreview"

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

  // POSTS STATE
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content:
        "Colestiae nesciunt atque? Ad reiciendis, aperiam eveniet error beatae tempore, rem aspernatur autem velit eaque officiis minima voluptatibus odio, omnis harum quibusdam dolorum.",
      author: "Admin",
      postedAtDate: new Date().toLocaleDateString("hu-HU"),
      postedAtTime: new Date().toLocaleTimeString("hu-HU"),
    },
    {
      id: 2,
      title: "Second Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, sunt aliquam corrupti facere excepturi, nisi ad ut earum quisquam debitis corporis libero dolores, soluta modi quos pariatur.",
      author: "Admin",
      postedAtDate: new Date().toLocaleDateString("hu-HU"),
      postedAtTime: new Date().toLocaleTimeString("hu-HU"),
    },
  ])

  const [login, setLogin] = useState(true)

  return (
    <div className='App'>
      <Router>
        <Header login={login} setLogin={setLogin} />
        <Container fluid>
          <Row>
            <Col md={2}>
              <MenuBar login={login} setLogin={setLogin} />
            </Col>
            <Col className='my-auto pt-3'>
              <Switch>
                <Route path='/' exact>
                  <div>
                    <h1 className='display-3'>WELCOME</h1>
                    <h4 className='text-muted'>to the news dashboard</h4>
                  </div>
                </Route>
                <Route path='/users' exact>
                  <UsersTable users={users} setUsers={setUsers} />
                </Route>
                <Route path='/posts' exact>
                  <PostsTable users={users} posts={posts} setPosts={setPosts} />
                </Route>
                <Route path='/posts/:title' exact>
                  <PostPreview posts={posts} />
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
