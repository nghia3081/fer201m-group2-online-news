
import { Container, Row, Col, Card } from "react-bootstrap";
import posts from "../../../data/post";
import { useNavigate } from "react-router-dom";

const PostByComment = () => {
    const navigate = useNavigate()
    const OnPostClick = (id) => {
        navigate(`/post/${id}`)
    }

    return (
        <Container style={{ padding: '20px' }}>
            <Row>
                <Col>
                    <h3>Bài viết nhiều bình luận</h3>
                </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                {posts.map(post => {
                    return (
                        <Col key={post.id} md={3} style={{display: 'flex'}}>
                            <Card style={{ cursor: "pointer", flex: '1 1 0', marginBottom: '20px', backgroundColor: ' #ECECEC'}} onClick={() => OnPostClick(post.id)}>
                                <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Card.Img src={post.thumbnail} style={{width: '200px', height: '200px'}}/>
                                    <Card.Title style={{fontSize: '15px', marginTop: '5px'}}>{post.title}</Card.Title>
                                    <Card.Text className="text_muted" style={{fontSize: '15px', marginTop: '5px'}}>{post.brief}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default PostByComment;