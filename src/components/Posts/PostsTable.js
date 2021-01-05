import React from "react"
import { Link } from "react-router-dom"
// TOASTIFY FOR REACT
import "react-toastify/dist/ReactToastify.css"
// IMPORTING BOOTSTRAP COMPONENTS
import {
  Table,
  Form,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap"
import PostAdd from "./PostAdd"

const PostsTable = ({ users, posts, setPosts, globalUser }) => {
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleChangeInput = (index, event) => {
    const values = [...posts]
    values[index][event.target.name] = event.target.value
    setPosts(values)
  }

  return (
    <div>
      <h1 className='pb-0'>Posts</h1>
      {/* CONDITIONALLY RENDERING AN INFORMATIVE TEXT OR ASKING THE USER TO ADD A NEW POST */}
      {posts.length ? (
        <small>
          <p className='text-muted pt-0 pb-5'>
            Click the <i className='fas fa-eye'></i> to preview your post!
            <br />
            Only users with <b>admin</b> or <b>editor</b> role can edit or
            delete!
          </p>
        </small>
      ) : (
        <small>
          <p className='text-muted pt-0 pb-5'>Add a post!</p>
        </small>
      )}

      {/* COMPONENT TO ADD NEW POST */}
      <PostAdd posts={posts} setPosts={setPosts} users={users} />

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
    </div>
  )
}

export default PostsTable
