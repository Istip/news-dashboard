import React from "react"
import { Link } from "react-router-dom"

// IMPORTING BOOTSTRAP COMPONENTS
import { InputGroup, FormControl, Form } from "react-bootstrap"

// IMPORT PROP TYPES
import PropTypes from "prop-types"

// IMPORT NOTIFICATION FUNCTION IT WILL BE USED IN THIS COMPONENT
import { notify } from "../Utils/Notification"

const Post = ({ post, posts, index, setPosts, globalUser }) => {
  // DELETE POST FUNCTION TAKES AN ID AND CUTS IT OUT FROM THE EXISTING ARRAY USING THE ARRAY FILTERING JAVASCRIPT FUNCTION
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
    notify("Post removed!", "BF0000")
  }

  // FUNCTION FOR HANDLING AND SAVING THE INPUT FIELDS
  // TAKES THE INDEX OF THE ELEMENT AND SAVES THE ENTERED VALUE BASED OF THE NAME OF THE TARGET. THESE NAMES ARE THE SAME AS OBJECT'S KEY IN THE POSTS STATE
  const handleChangeInput = (index, event) => {
    const values = [...posts]
    values[index][event.target.name] = event.target.value
    setPosts(values)
  }

  return (
    <tr key={index}>
      <td style={{ maxWidth: "200px" }}>
        <h5 className='pt-2'>
          <b>{post.title}</b>
        </h5>
        <br />

        {/* FIRST CELL CONTAINS THE TITLE OF THE POST */}
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

      {/* SECOND CELL CONTAINS THE CONTENT OF THE POST */}
      <td style={{ maxWidth: "600px" }} className='p-3'>
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

      {/* THIRD CELL DESCRIBES THE AUTHOR'S NAME WITH A GREEN SQUARE PILL */}
      <td className='pt-3'>
        <b className='bg-success text-light px-3 py-1'>{post.author}</b>
      </td>
      <td>
        <small>
          {post.postedAtDate} <br />
          {post.postedAtTime}
        </small>
      </td>

      {/* THE LAST CELL IS THE ACTION BUTTONS CELL */}
      <td>
        {globalUser !== "user" && (
          // THE DELETE POST ICON (ONLY VISIBLE FOR ADMIN AND EDITOR ROLES)
          <Link to='/posts'>
            <i
              className='fas fa-trash text-danger pr-2'
              onClick={() => deletePost(post.id)}
            ></i>
          </Link>
        )}
        {/* THE PREVIEW POST ICON TO PREVIEW YOUR CUSTOM POSTS (FOR ANY ROLES) */}
        <Link to={`/posts/${post.title}`}>
          <i className='fas fa-eye'></i>
        </Link>
      </td>
    </tr>
  )
}

export default Post

// VALIDATING PROPS
Post.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array,
  index: PropTypes.number,
  setPosts: PropTypes.func,
  globalUser: PropTypes.string.isRequired,
}
