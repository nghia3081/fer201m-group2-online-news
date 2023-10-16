import { Col, Row } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <div className="bg-body-tertiary p-4">
            <Row>
                <Col md={4} className="d-flex justify-content-center">
                    Footer left
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                    Footer center
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    Footer right
                </Col>
            </Row>
        </div>

    )
}
export default Footer