import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getPosts } from '../redux/actions/post'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
    // dispatch -> to change the global state in redux
    //untuk membedakan/men trigger antara global state dan local state

    //men-dispatch function => mengirimkan data dari komponen posts ke redux store, kemudian redux store dpt digunakan oleh komponen yang membutuhkannya
    const dispatch = useDispatch()

    // useSelector => to access the global state (Redux)
    //memakai useSelector agar dapat memiliki akses terhadap statenya
    const { posts } = useSelector((state) => state.post)
   

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container className='p-4'>
            <Row>
                {posts?.length > 0 &&
                posts.map((post) => (
                    <Col key={post?.id} className='my-2'>
                        <Card style={{width:'18rem'}}>
                        <Card.Body>
                            <Card.Title className="text-center">{post?.title}</Card.Title>
                            <Card.Text>{post?.body}</Card.Text>
                            <div class="d-grid gap-2">
                                <Button
                                    variant="primary"
                                     as={Link}
                                     to={`/posts/${post?.id}`}
                                >
                                    Details
                                 </Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Posts