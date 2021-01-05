import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// IMPORTING BOOTSTRAP COMPONENTS
import { Container, Row, Col } from "react-bootstrap"

// IMPORTING PROJECT'S COMPONENTS
import Header from "./components/Layout/Header"
import MenuBar from "./components/Layout/MenuBar"
import UsersTable from "./components/User/UsersTable"
import PostsTable from "./components/Posts/PostsTable"
import PostPreview from "./components/Posts/PostPreview"
import Login from "./components/Pages/Login"

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

  // STATE FOR LOGIN VALIDATION
  const [login, setLogin] = useState(false)

  // STATE FOR GLOBAL USER CHOOSEN FROM THE HEADER
  const [globalUser, setGlobalUser] = useState("admin")

  return (
    <div className='App'>
      <Router>
        <Header
          login={login}
          setLogin={setLogin}
          users={users}
          globalUser={globalUser}
          setGlobalUser={setGlobalUser}
        />
        <Container fluid>
          <Row>
            <Col md={2}>
              <MenuBar login={login} setLogin={setLogin} />
            </Col>
            <Col className='my-auto pt-3'>
              <Switch>
                {/* MAIN ROUTE MESSAGE */}
                <Route path='/' exact>
                  <div className='pt-5'>
                    <h1 className='display-3'>WELCOME</h1>
                    <h4 className='text-muted'>to the news dashboard</h4>
                    {!login && (
                      <p className='pt-3 text-primary'>
                        <b>Please log in to use the app!</b>
                      </p>
                    )}
                  </div>
                </Route>

                {/* RETURNING USERS TABLE OR LOGIN COMPONENT BASED ON LOGIN STATUS */}
                <Route path='/users' exact>
                  {login ? (
                    <UsersTable
                      users={users}
                      setUsers={setUsers}
                      globalUser={globalUser}
                    />
                  ) : (
                    <Login page='Users' />
                  )}
                </Route>

                {/* RETURNING POSTS TABLE OR LOGIN COMPONENT BASED ON LOGIN STATUS */}
                <Route path='/posts' exact>
                  {login ? (
                    <PostsTable
                      globalUser={globalUser}
                      users={users}
                      posts={posts}
                      setPosts={setPosts}
                    />
                  ) : (
                    <Login page='Posts' />
                  )}
                </Route>

                {/* RETURNING POST PREVIEW OR LOGIN COMPONENT BASED ON LOGIN STATUS */}
                <Route path='/posts/:title' exact>
                  {login ? (
                    <PostPreview posts={posts} />
                  ) : (
                    <Login page='Post Preview' />
                  )}
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
