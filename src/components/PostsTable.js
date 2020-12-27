import React, { useState } from "react"
import uuid from "react-uuid"
import { Link } from "react-router-dom"
// BOOTSTRAP COMPS
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const PostsTable = ({ users, posts, setPosts }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("Admin")

  const submitHandler = (e) => {
    e.preventDefault()
    setPosts([
      ...posts,
      {
        id: uuid(),
        title,
        content,
        author,
        postedAtDate: new Date().toLocaleDateString("hu-HU"),
        postedAtTime: new Date().toLocaleTimeString("hu-HU"),
      },
    ])
    setTitle("")
    setContent("")
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div>
      <h1 className='pb-0'>Posts Page</h1>
      <small>
        <p className='text-muted pt-0 pb-5'>
          Click the eye icon for to preview your post!
        </p>
      </small>
      <h3 className='pb-3'>Add new Post</h3>
      <Container style={{ maxWidth: "800px" }} className='pb-5'>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                <b>Title:</b>
              </Form.Label>
              <Col>
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
                {users.length ? (
                  <Form.Control
                    as='select'
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    required
                  >
                    {users.map((user) => (
                      <option key={user.id} value={user.firstname}>
                        {user.firstname} {user.lastname}
                      </option>
                    ))}
                  </Form.Control>
                ) : (
                  <p className='text-danger'>
                    <b>Please add users!</b>
                  </p>
                )}
              </Col>
            </Form.Row>
          </Form.Group>
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

      <Container>
        {posts.length ? (
          <>
            <hr />
            <br />
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  <td>
                    <b>Title</b>
                  </td>
                  <td>
                    <b>Content</b>
                  </td>
                  <td>
                    <b>Author</b>
                  </td>
                  <td>
                    <b>Posted</b>
                  </td>
                  <td>
                    <b>Action</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td style={{ maxWidth: "500px" }} className='px-3'>
                      <small>{post.content}</small>
                    </td>
                    <td>{post.author}</td>
                    <td>
                      {post.postedAtDate} <br /> {post.postedAtTime}
                    </td>
                    <td>
                      <i
                        className='fas fa-eraser text-danger pr-2'
                        onClick={() => deletePost(post.id)}
                      ></i>
                      <Link to={`/posts/${post.title}`}>
                        <i className='fas fa-eye'></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <h3 className='text-danger'>
            <b>No posts to show!</b>
          </h3>
        )}
      </Container>
    </div>
  )
}

export default PostsTable
