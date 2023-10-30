
import { Button, Col, Container, Row, Modal, Table, Form } from "react-bootstrap"
import { useState } from "react"
import authors from "../../data/author"

const AuthorManagement = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h4>Danh sách tác giả</h4>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col></Col>
                    <Col md={2}>
                        <Button variant="primary" onClick={toggleOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Thêm tác giả
                        </Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên tác giả</th>
                                <th>Năm sinh</th>
                                <th>Bắt đầu</th>
                                <th>Số bài viết</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map(author => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.id}</td>
                                        <td>{author.name}</td>
                                        <td>{author.detail?.dateOfBirth}</td>
                                        <td>{author.detail?.dateOfBirth}</td>
                                        <td>{author.posts}</td>
                                        <td>
                                            <Button variant='danger' >Cấm</Button>
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
                    <Modal.Title>Thêm tác giả</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formFileMultiple" className="mb-3">
                            <Form.Label column sm="4">Chọn Avatar</Form.Label>
                            <Col sm='8'><Form.Control type="file" multiple /></Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Tên tác giả
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nhập tên ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Email
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nhập email ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Mật khẩu
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="password" placeholder="Nhập mật khẩu ..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Năm sinh
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="date"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Bắt đầu viết
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="date"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Sở thích
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Mô tả
                            </Form.Label>
                            <Col sm="12">
                                <Form.Control as="textarea" rows={3} placeholder="Nhập tên bài viết ..." />
                            </Col>
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

export default AuthorManagement