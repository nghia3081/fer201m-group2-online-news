import { Button, Col, ListGroup, Row } from "react-bootstrap"

const Comment = () => {
    return (
        <ListGroup as="ol">
            <ListGroup.Item as="li">
                <Row>
                    <Col md={4}>
                        Avatar
                    </Col>
                    <Col md={8} >
                        <b>Username</b>
                        <p>Comment</p>
                        <Row>
                            <Col>
                                <Button>Reply</Button>
                            </Col>
                            <Col>
                                <Button>Report</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}
export default Comment;