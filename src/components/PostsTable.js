import React, { useState } from "react"
import uuid from "react-uuid"
import { Link } from "react-router-dom"
// TOASTIFY FOR REACT
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// BOOTSTRAP COMPS
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

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
    toast.success("Post has been created!")
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
    toast.error("Post removed!")
  }

  const handleChangeInput = (index, event) => {
    const values = [...posts]
    values[index][event.target.name] = event.target.value
    setPosts(values)
  }

  return (
    <div>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className='pb-0'>Posts</h1>
      <small>
        <p className='text-muted pt-0 pb-5'>
          Click the <i className='fas fa-eye'></i> to preview your post!
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

      <Container className='pb-5'>
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
                {posts.map((post, index) => (
                  <tr key={index}>
                    <td style={{ maxWidth: "200px" }}>
                      <h5 className='pt-2'>
                        <b>{post.title}</b>
                      </h5>{" "}
                      <br />
                      <InputGroup size='sm' className='px-5'>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <i className='fas fa-edit'></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          name='title'
                          value={post.title}
                          type='text'
                          onChange={(event) => handleChangeInput(index, event)}
                        />
                      </InputGroup>
                    </td>
                    <td style={{ maxWidth: "500px" }} className='p-3'>
                      <Form.Control
                        name='content'
                        size='sm'
                        value={post.content}
                        as='textarea'
                        rows={4}
                        required
                        onChange={(event) => handleChangeInput(index, event)}
                      />
                    </td>
                    <td className='pt-3'>
                      <b className='bg-success text-light px-3 py-1'>
                        {post.author}
                      </b>
                    </td>
                    <td>
                      <small>
                        {post.postedAtDate} <br />
                        {post.postedAtTime}
                      </small>
                    </td>
                    <td>
                      <Link to='/posts'>
                        <i
                          className='fas fa-trash text-danger pr-2'
                          onClick={() => deletePost(post.id)}
                        ></i>
                      </Link>
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
