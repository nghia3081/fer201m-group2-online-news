import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import './style.css'
import useAccountService from "../../../apis/account"

const UserProfile = () => {
    const accountService = useAccountService();
    const [user, setUser] = useState({});
    useEffect(() => {
        accountService.getMyProfile().then(res => setUser(res));
    }, [])

    const onUpdate = () => {
        accountService.updateUser(user).then(
            res => alert("Update successfully")
        ).catch(error => alert(error));
    }
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
                        <Form.Control value={user?.fullName}
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                        ></Form.Control>
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control value={user?.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}>

                        </Form.Control>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={user?.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}>

                        </Form.Control>
                        <Form.Label>Giới tính: </Form.Label>
                        <div>
                            <Form.Check
                                inline
                                label="Nam"
                                name="gender"
                                type="radio"
                                value={true}
                                onChange={(e) => setUser({ ...user, gender: e.target.value === "true" })}
                                checked={user?.gender}
                            />
                            <Form.Check
                                inline
                                name="gender"
                                label="Nữ"
                                type="radio"
                                value={false}
                                onChange={(e) => { setUser({ ...user, gender: e.target.value === "true" }) }}
                                checked={!user?.gender}
                            />

                        </div>
                        <div className="text-center">
                            <Button className="text-center" variant="warning" onClick={onUpdate}>Update</Button>
                            {user && user.role !== 0 &&
                                <Button className="text-center" style={{ marginLeft: '10px' }} variant="danger" onClick={() => window.location.href = '/manage'}>
                                    Manage
                                </Button>
                            }
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>


    )
}
export default UserProfile