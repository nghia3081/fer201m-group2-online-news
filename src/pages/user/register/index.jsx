import { Button, Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import './index.css'
import { Link } from "react-router-dom";
const Register = () => {
    return (<div className="container-fluid h-100">
        <Row>
            <Col md={8} className="d-flex justify-content-center align-item-center position-relative">
                <div className="login-form"
                    style={{
                        position: "absolute",
                        top: '50%',
                    }}>
                    <h4 className="text-center mb-3">Tạo tài khoản online news</h4>
                    <Form  >
                        <Form.Label >Email</Form.Label>
                        <Form.Control required={true} name="email"></Form.Control>
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control name="fullName"></Form.Control>
                        <Form.Label >Phone</Form.Label>
                        <Form.Control name="phone"></Form.Control>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required={true} name="password"></Form.Control>
                        <p className="p-2">You already have account? <Link to="/login"><Button>Login</Button></Link></p>
                        <div className="mt-2 text-center">
                            <Button>Tạo tài khoản</Button>
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