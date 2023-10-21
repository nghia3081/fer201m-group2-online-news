import { Card, Col, Container, Image, Row } from "react-bootstrap"
import Post from "../../../components/post"

const AuthorProfile = () => {
    return (<Container>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
                <Image
                    className="w-100"
                    src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
                    roundedCircle />



            </Col>
            <Col md={4}></Col>
        </Row>
        <Card className="text-center mb-2 mt-2">
            <Card.Header>Author name</Card.Header>
            <Card.Body className="text-left">
                <ul>
                    <li>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur veniam illo quidem, molestiae sit mollitia! Optio veritatis tempora ea quo repellendus modi error atque, facere voluptate dolorum aliquid nobis.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, in! Ex, aspernatur quasi! Laudantium dicta magni magnam obcaecati recusandae pariatur deleniti perspiciatis esse possimus! Eum ad laboriosam molestiae repellat esse?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perspiciatis, fugit necessitatibus adipisci in dolorum magni accusamus dolor magnam a! Accusamus qui repudiandae commodi cumque. Voluptates architecto molestias magnam asperiores.
                        </Card.Text>
                    </li>
                </ul>

            </Card.Body>
        </Card>
        <Row>
            {
                [...Array(10).keys()].map((value, i) => {
                    return (<Col md={6} key={i} className="mb-2">
                        <Post>

                        </Post>
                    </Col>)
                })
            }
        </Row>
    </Container>)
}
export default AuthorProfile