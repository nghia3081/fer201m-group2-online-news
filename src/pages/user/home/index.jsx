import { Col, Container, Row } from "react-bootstrap"
import Post from "../../../components/post"


const HomePage = () => {
    return (

        <Container>
            <Row>
                <Col md={6}>
                    <Row>
                        {
                            [...Array(100).keys()].map((value, i) => {
                                return (<Col md={6} key={i} className="mb-2">
                                    <Post>

                                    </Post>
                                </Col>)
                            })
                        }
                    </Row>


                </Col>
                <Col md={6}>
                    <Row>
                        {
                            [...Array(38).keys()].map((value, i) => {
                                return (<Col md={12} key={i} className="mb-2">
                                    <h4>Category {i}</h4>
                                    <Row>
                                        <Col md={6}>
                                            <Post>

                                            </Post>
                                        </Col>
                                        <Col md={6}>
                                            <Post>

                                            </Post>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                </Col>)
                            })
                        }
                    </Row>
                </Col>

            </Row>
        </Container>

    )
}
export default HomePage;