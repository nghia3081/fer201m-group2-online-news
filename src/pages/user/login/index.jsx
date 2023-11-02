import { Button, Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import './index.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import useAccountService from "../../../apis/account";



const Login = () => {
    const [user, setUser] = useState();
    const [validated, setValidated] = useState(false);
    const accountService = useAccountService();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(form.checkValidity());
        event.preventDefault();
        event.stopPropagation();

        accountService.login(user)
            .then(user => {

                window.location.href = "/"
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
                    <h4 className="text-center">Đăng nhập online news</h4>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Label >Username</Form.Label>
                        <Form.Control onChange={(e) => setUser({ ...user, username: e.target.value })} required={true} name="username"></Form.Control>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" required={true} name="password"></Form.Control>
                        <p className="p-2">You don't have account? <Link to="/register"><Button>Register new account</Button></Link></p>
                        <div className="mt-2 text-center">
                            <Button type="submit">Login</Button>
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
export default Login;