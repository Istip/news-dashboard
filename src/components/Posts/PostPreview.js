import React from "react"
import { Link, useParams } from "react-router-dom"
// BOOTSTRAP COMPONENTS
import { Container, Card, Col, Row } from "react-bootstrap"

const PostPreview = ({ posts }) => {
  // DESTRUCTURED TITLE USED TO CREATE CUSTOM PAGES
  // IT TAKES THE POST'S TITLE AND ADDS AFTER: '/POSTS/POST-TITLE'
  const { title } = useParams()

  return (
    <>
      {posts
        .filter((post) => post.title === title)
        .map((post, index) => (
          <Container key={index} className='mb-5'>
            <Card className='boxshadow p-5'>
              <Row>
                {/* FIRST COLUMN TO SHOW ADDITIONAL POST INFORMATION */}
                <Col lg={4}>
                  <h1>{post.title}</h1>
                  <hr className='mx-5' />
                  <p>
                    Posted by: <b>{post.author}</b>
                  </p>
                  <div className='text-muted pb-3'>
                    <i className='far fa-clock pr-1'></i>{" "}
                    <small>
                      {post.postedAtDate} {post.postedAtTime}
                    </small>
                  </div>
                </Col>

                {/* SECOND COLUMN TO SHOW POST CONTENT AND BACK LINK */}
                <Col lg={8} className='text-left'>
                  <p>{post.content}</p>
                  <Link to='/posts'>
                    <b>
                      <i className='fas fa-long-arrow-alt-left pr-1'></i> Back
                      to Posts
                    </b>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Container>
        ))}
    </>
  )
}

export default PostPreview
