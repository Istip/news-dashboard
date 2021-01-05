import React from "react"

import Post from "./Post"
// IMPORT BOOTSTRAP COMPONENTS
import { Container, Table } from "react-bootstrap"

const Posts = ({ posts, setPosts, globalUser }) => {
  return (
    <Container className='pb-5'>
      {posts.length ? (
        <>
          <hr className='pb-4 mx-5' />
          <Table striped bordered hover size='sm'>
            {/* TABLE'S HEADER IS STATIC, SO IT'S RENDERING ONLY ONE TIME */}
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
              {/* TABLE'S BODY IS DYNAMIC AND CHANGES BASED ON THE POSTS STATE */}
              {posts.map((post, index) => (
                <Post
                  key={index}
                  post={post}
                  posts={posts}
                  index={index}
                  setPosts={setPosts}
                  globalUser={globalUser}
                />
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        // IT THERE ARE NO POSTS ADDED, OR YOU REMOVE ALL THE POSTS FROM THE LIST, YOU GET THIS WARNING:
        <h3 className='text-danger'>
          <b>No posts to show!</b>
        </h3>
      )}
    </Container>
  )
}

export default Posts
