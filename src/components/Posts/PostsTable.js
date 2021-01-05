import React from "react"

import PostAdd from "./PostAdd"
import Posts from "./Posts"

const PostsTable = ({ users, posts, setPosts, globalUser }) => {
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
