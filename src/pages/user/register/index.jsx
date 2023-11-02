import { Button, Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import './index.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAccountService from "../../../apis/account";
const Register = () => {
    const [user, setUser] = useState({});
    const [validated, setValidated] = useState(false);
    const accountService = useAccountService();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(form.checkValidity());

        event.preventDefault();
        event.stopPropagation();
        console.log(user);
        accountService.register(user)
            .then(user => {
                alert("Register successfully");
                navigate("/login");
            })
            .catch(error => {
                alert(error)
            })


    };

    return (<div className="container-fluid h-100">
        <Row>
            <Col md={8} className="d-flex justify-content-center align-item-center position-relative">
                <div className="login-form"
                    style={{
                        position: "absolute",
                        top: '50%',
                    }}>
                    <h4 className="text-center mb-3">Tạo tài khoản online news</h4>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Label >Username</Form.Label>
                        <Form.Control required={true} name="username"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        ></Form.Control>
                        <Form.Label >Email</Form.Label>
                        <Form.Control required={true} name="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}></Form.Control>
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control name="fullName"
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                        ></Form.Control>
                        <Form.Label >Phone</Form.Label>
                        <Form.Control name="phone"
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        ></Form.Control>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required={true} name="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        ></Form.Control>
                        <p className="p-2">You already have account? <Link to="/login"><Button>Login</Button></Link></p>
                        <div className="mt-2 text-center">
                            <Button type="submit">Tạo tài khoản</Button>
                        </div>

                    </Form>

                </div>
            </Col>
            <Col md={4}>
                <img
                    style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover"
                    }}
                    src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp" />
            </Col>
        </Row>

    </div>)

}
export default Register;