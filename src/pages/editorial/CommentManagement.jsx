import { Button, Col, Container, Row, Modal, Table, Form } from "react-bootstrap"
import comments from "../../data/comment"

const CommentManagement = () => {
    return (
        <>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h4>Danh sách bình luận</h4>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col></Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Bình luận</th>
                                <th>Người bình luận</th>
                                <th>Báo cáo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map(comment => {
                                return (
                                    <tr key={comment.id}>
                                        <td>{comment.id}</td>
                                        <td>{comment.content.substring(0, 50) + '...'}</td>
                                        <td>{comment.username}</td>
                                        <td>{comment.report}</td>
                                        <td>
                                            <Button variant='success' style={{ marginRight: '10px' }}>Chấp nhận</Button>
                                            <Button variant='danger' >Từ chối</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default CommentManagement