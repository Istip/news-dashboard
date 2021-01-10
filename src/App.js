import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"

// IMPORTING BOOTSTRAP COMPONENTS
import { Container, Row, Col } from "react-bootstrap"

// IMPORTING PROJECT'S COMPONENTS
import Navbar from "./components/Layout/Navbar"
import Menu from "./components/Layout/Menu"
import UsersTable from "./components/User/UsersTable"
import PostsTable from "./components/Posts/PostsTable"
import PostPreview from "./components/Posts/PostPreview"
import Login from "./components/Pages/Login"

// IMPORT CONTEXT RESPONSIBLE FOR THE GLOBAL USER
import { GlobalUserProvider } from "./context/GlobalUserContext"

// IMPORT NOTIFICATION COMPONENT WHICH IS RESPONSIBLE IN THE MESSAGES DISPLAYED IN THE RIGHT BOTTOM SIDE OF THE WEBSITE WHEN TRIGGERED
import Notification from "./components/Utils/Notification"

function App() {
  // SETTING USERS STATE AS AN EMPTY ARRAY BEFORE API CALL IN OUR USEEFFECT HOOK
  const [users, setUsers] = useState([])

  // POSTS STATE
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "First Post",
    //   content:
    //     "Colestiae nesciunt atque? Ad reiciendis, aperiam eveniet error beatae tempore, rem aspernatur autem velit eaque officiis minima voluptatibus odio, omnis harum quibusdam dolorum.",
    //   author: "Admin",
    //   postedAtDate: new Date().toLocaleDateString("hu-HU"),
    //   postedAtTime: new Date().toLocaleTimeString("hu-HU"),
    // },
    // {
    //   id: 2,
    //   title: "Second Post",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, sunt aliquam corrupti facere excepturi, nisi ad ut earum quisquam debitis corporis libero dolores, soluta modi quos pariatur.",
    //   author: "Admin",
    //   postedAtDate: new Date().toLocaleDateString("hu-HU"),
    //   postedAtTime: new Date().toLocaleTimeString("hu-HU"),
    // },
  ])

  // STATE FOR LOGIN VALIDATION
  const [login, setLogin] = useState(false)

  // USEEFFECT HOOK WITH AXIOS TO MAKE THE GET API CALL FOR THE USERS
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://minic.dev/tasks/users.json"
        // DUE CORS POLICY PROXY IS USED TO GET THE JSON FILE
      )
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // DUE THE EMPTY ARRAY AS SECOND ARGUMENT, THIS EFFECT WILL ONLY RUN ONCE

  // POST REQUEST TO LOGIN WITH EMAIL AND PASSWORD
  // NOT WORKING YET
  useEffect(() => {
    // axios
    //   .post(
    //     "https://cors-anywhere.herokuapp.com/https://minic.dev/tasks/users.php",
    //     {
    //       email: "isticsek@gmail.com",
    //       password: "password",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }, [login])

  // FUNCTION USED TO CHANGE THE CONTENT OF THE POST
  // IT IS PASSED DOWN TO THE POST PREVIEW PAGE
  const handleChangeInput = (index, event) => {
    const values = [...posts]
    values[index][event.target.name] = event.target.value
    setPosts(values)
  }

  return (
    <div className='App'>
      <GlobalUserProvider>
        <Router>
          <Navbar login={login} setLogin={setLogin} users={users} />
          <Container fluid>
            <Row>
              <Col md={2}>
                <Menu login={login} setLogin={setLogin} />
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
                      <UsersTable users={users} setUsers={setUsers} />
                    ) : (
                      <Login page='Users' />
                    )}
                  </Route>

                  {/* RETURNING POSTS TABLE OR LOGIN COMPONENT BASED ON LOGIN STATUS */}
                  <Route path='/posts' exact>
                    {login ? (
                      <PostsTable
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
                      <PostPreview
                        posts={posts}
                        setPosts={setPosts}
                        handleChangeInput={handleChangeInput}
                      />
                    ) : (
                      <Login page='Post Preview' />
                    )}
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </GlobalUserProvider>

      {/* NOTIFICATION COMPONENT MOUNTED, CAN BE CALLED WHEN NEEDED */}
      <Notification />
    </div>
  )
}

export default App
