import React from "react"
import { Link } from "react-router-dom"

// IMPORT BOOTSTRAP COMPONENTS
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap"

const Posts = ({ posts, setPosts, globalUser }) => {
  // DELETE POST FUNCTION TAKES AN ID AND CUTS IT OUT FROM THE EXISTING ARRAY USING THE ARRAY FILTERING JAVASCRIPT FUNCTION
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleChangeInput = (index, event) => {
    const values = [...posts]
    values[index][event.target.name] = event.target.value
    setPosts(values)
  }

  return (
    <Container className='pb-5'>
      {posts.length ? (
        <>
          <hr className='pb-4 mx-5' />
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
                    </h5>
                    <br />
                    <InputGroup size='sm' className='px-5'>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className='fas fa-edit'></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        disabled={globalUser === "user" ? true : false}
                        name='title'
                        value={post.title}
                        type='text'
                        onChange={(event) => handleChangeInput(index, event)}
                      />
                    </InputGroup>
                  </td>
                  <td style={{ maxWidth: "500px" }} className='p-3'>
                    <Form.Control
                      disabled={globalUser === "user" ? true : false}
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
                    {globalUser !== "user" && (
                      <Link to='/posts'>
                        <i
                          className='fas fa-trash text-danger pr-2'
                          onClick={() => deletePost(post.id)}
                        ></i>
                      </Link>
                    )}
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
  )
}

export default Posts
