import React, { useState } from "react"

const PostsTable = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "Content of the first post",
      author: "admin",
      postedAt: new Date().toLocaleDateString("en-US").split(":"),
    },
  ])

  console.log(posts)

  return (
    <div>
      <h1>Posts Page</h1>
    </div>
  )
}

export default PostsTable
