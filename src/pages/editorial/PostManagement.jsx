import { Button, Col, Container, Row, Modal, Table, Form } from "react-bootstrap"
import posts from "../../data/post"
import { useState } from "react"

const PostManagement = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h4>Danh sách bài viết</h4>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col></Col>
                    {/* <Col md={2}>
                        <Button variant="primary" onClick={toggleOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Thêm bài viết
                        </Button>
                    </Col> */}
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên bài viết</th>
                                <th>Ngày đăng</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => {
                                return (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.public_date}</td>
                                        <td>
                                            <Button variant='info' style={{ marginRight: '10px' }}>Xem</Button>
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

            <Modal show={isOpen} onHide={toggleOpenModal} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm bài viết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formFileMultiple" className="mb-3">
                            <Form.Label column sm="4">Chọn Thumbnail</Form.Label>
                            <Col sm='8'><Form.Control type="file" multiple /></Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Tên bài viết
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nhập tên bài viết ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Mô tả
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nhập mô tả bài viết ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Nội dung
                            </Form.Label>
                            <Col sm="12">
                                <Form.Control as="textarea" rows={3} placeholder="Nhập tên bài viết ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Chọn ảnh</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleOpenModal}>
                        Lưu
                    </Button>
                    <Button variant="secondary" onClick={toggleOpenModal}>
                        Thoát
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PostManagement