import { Button, Col, Container, Form, Row } from "react-bootstrap"

const UserProfile = () => {
    return (
        <Container>
            <h4 className="text-center">Thông tin tài khoản</h4>
            <Row>
                <Col md={4}>
                    <Row>
                        <img className="rounded" style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://th.bing.com/th/id/OIG.y3eGwbcLkQtDhkCEsLKu" />
                    </Row>
                </Col>
                <Col md={8}>
                    <Form>
                        <Form.Label>Họ tên</Form.Label>
                        <Form.Control></Form.Control>
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control type="date"></Form.Control>
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control></Form.Control>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"></Form.Control>
                        <Form.Label>Giới tính: </Form.Label>
                        <div>
                            <Form.Check
                                inline
                                label="Nam"
                                name="gender"
                                type="radio"
                                value={true}
                            />
                            <Form.Check
                                inline
                                name="gender"
                                label="Nữ"
                                type="radio"
                                value={false}
                            />
                        </div>
                        <div className="text-center">
                            <Button className="text-center" variant="warning">Update</Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>


    )
}
export default UserProfile