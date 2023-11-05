import { Button, Card, Col, Container, Row } from "react-bootstrap";
import posts from "../../../data/post";

const EditorialManagement = () => {
    return (
        <Container style={{ padding: '20px' }}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h3>Danh sách quản lý</h3>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                {posts.map(post => {
                    return (
                        <Col key={post.id} md={3} style={{ display: 'flex' }}>
                            <Card style={{ flex: '1 1 0', marginBottom: '20px', backgroundColor: ' #ECECEC' }}>
                                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Card.Img src={post.thumbnail} style={{ width: '200px', height: '200px' }} />
                                    <Card.Title style={{ fontSize: '15px', marginTop: '5px' }}>{post.title}</Card.Title>
                                    <Card.Text className="text_muted" style={{ fontSize: '15px', marginTop: '5px' }}>{post.brief}</Card.Text>
                                    <>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="danger">Go somewhere</Button>
                                    </>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default EditorialManagement;