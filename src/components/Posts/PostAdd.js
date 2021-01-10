import React, { useState } from "react"
import uuid from "react-uuid"

// IMPORTING BOOTSTRAP COMPONENTS
import { Container, Form, Col, Button } from "react-bootstrap"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

// IMPORT NOTIFICATION FUNCTION IT WILL BE USED IN THIS COMPONENT
import { notify } from "../Utils/Notification"

const PostAdd = ({ posts, setPosts, users }) => {
  // BASIC STATES FOR HANDLING THE POST ADD COMPONENTS INPUT FIELDS
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("Admin")

  // THE FUNCTION FOR HANDLING THE FORM SUBMIT
  // FIRST, PREVENTS THE PAGE FROM A RELOAD AFTER SUBMITTING
  // THEN ADDS THE NEW OBJECT THE THE ARRAY, WITH UUID ID GENERATOR
  // SINCE THE TITLE, CONTENT AND AUTHOR ARE NAMED THE SAME WAY AS THE ARRAY KEYS, WE CAN USE ES6 TO SHORTEN. SO TITLE: TITLE BECOMES TITLE
  const submitHandler = (e) => {
    e.preventDefault()
    setPosts([
      {
        id: uuid(),
        title,
        content,
        author,
        postedAtDate: new Date().toLocaleDateString("hu-HU"),
        postedAtTime: new Date().toLocaleTimeString("hu-HU"),
      },
      ...posts,
    ])
    // NEW!! THE NEW POST IS THE FIRST ELEMENT OF THE ARRAY NOW!

    // SETTING THE STATES BELOW, IT EMPTIES THE USED INPUT FIELDS
    setTitle("")
    setContent("")

    // DISPLAYING A MESSAGE FOR THE SUBMITTED POST
    notify("New post added!", "4BB511")
  }

  return (
    <>
      <h3 className='pb-3'>Add new Post</h3>
      <Container style={{ maxWidth: "800px" }} className='pb-5'>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                <b>Title:</b>
              </Form.Label>
              <Col>
                {/* FIRST INPUT FIELD FOR THE TITLE OF THE NEW POST */}
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type='text'
                  placeholder='Enter post title'
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                <b>Posted by:</b>
              </Form.Label>
              <Col>
                {/* SECOND INPUT FIELD RETURNS A DROPDOWN SELECT */}
                {users.length ? (
                  <Form.Control
                    as='select'
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    required
                  >
                    {/* USING ARRAY MAPPING, WE CAN RETURN THE EXISTING USERS */}
                    {users.map((user) => (
                      <option key={user.uuid} value={user.firstname}>
                        {user.firstname} {user.lastname}
                      </option>
                    ))}
                  </Form.Control>
                ) : (
                  // IF THE USERS ARRAY IS EMPTY, WE ARE GETTING A WARNING
                  <p className='text-danger'>
                    <b>Please add users!</b>
                  </p>
                )}
              </Col>
            </Form.Row>
          </Form.Group>

          {/* THE THIRD INPUT FIELD IS A TEXTAREA FOR THE NEW POST'S CONTENT */}
          <Form.Group>
            <Form.Label>
              <b>Post Content:</b>
            </Form.Label>
            <Form.Control
              onChange={(e) => setContent(e.target.value)}
              value={content}
              as='textarea'
              rows={5}
              required
            />
          </Form.Group>

          <Button type='submit'>
            <i className='fas fa-paper-plane pr-2'></i> Post
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default PostAdd

// DEFAULT PROPS
PostAdd.defaultProps = {
  posts: [],
  users: [],
}

// VALIDATING PROP TYPES
PostAdd.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  users: PropTypes.array,
}
