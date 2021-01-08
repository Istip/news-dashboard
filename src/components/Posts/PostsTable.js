import React, { useContext } from "react"

// IMPORT PROJECT COMPONENTS
import PostAdd from "./PostAdd"
import Posts from "./Posts"

// IMPORT GLOBAL USER CONTEXT, 'CAUSE IT WILL BE USED IN THE POSTS TABLE
import { GlobalUserContext } from "../../context/GlobalUserContext"

const PostsTable = ({ users, posts, setPosts }) => {
  // DESTRUCTURING GLOBALUSER FROM THE GLOBALUSERCONTEXT'S VALUE
  const [globalUser] = useContext(GlobalUserContext)
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

      {/* COMPONENT TO RENDER THE EXISTING POSTS */}
      <Posts posts={posts} setPosts={setPosts} globalUser={globalUser} />
    </div>
  )
}

export default PostsTable
