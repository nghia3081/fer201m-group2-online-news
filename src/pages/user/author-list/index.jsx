import { Card, Col, Container, Nav, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const AuthorList = () => {
    const navigate = useNavigate();

    const onClickAuthor = () => {
        navigate("/author/5");
    }
    return (<Container>
        {
            [...Array(10).keys()].map((value, i) => {
                return (

                    
                        <Card key={i} className="mb-2" style={{cursor:"pointer"}} onClick={onClickAuthor}>
                            <Row>
                                <Col md={4}>
                                    <img style={{ objectFit: "cover" }} className="b-5 w-100" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"></img>
                                </Col>
                                <Col
                                    md={8}
                                >
                                    <Card.Body>
                                        <Card.Title>Author name</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Category</Card.Subtitle>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere officiis autem distinctio? Vel quibusdam nisi, commodi dolores molestias et nostrum provident, ratione labore modi in vitae perspiciatis cupiditate voluptatibus.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore mollitia excepturi quos eos laborum quae maiores, molestias cupiditate, quibusdam delectus quam, sapiente incidunt blanditiis nam in soluta dignissimos dolores.
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vitae exercitationem repellendus non, error saepe quis ullam quaerat tenetur maxime earum, quam minima ratione recusandae odio dolor facilis nihil sunt!
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>

                        </Card>
                    
                )
            })
        }


    </Container>)


}
export default AuthorList