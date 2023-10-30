import { Card, Col, Container, Nav, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import authors from "../../../data/author"
import categories from "../../../data/category"

const AuthorList = () => {
    const navigate = useNavigate();

    const onClickAuthor = (id) => {
        navigate(`/author/${id}`)
    }
    return (<Container>
        {
            authors.map(author => {
                return (
                    <Card key={author.id} className="mb-2" style={{ cursor: "pointer" }} onClick={(_) => onClickAuthor(author.id)}>
                        <Row>
                            <Col md={4}>
                                <img style={{ objectFit: "cover" }} className="b-5 w-100" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"></img>
                            </Col>
                            <Col
                                md={8}
                            >
                                <Card.Body>
                                    <Card.Title>{author.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{
                                        author.category_ids.map(cate => {
                                            return(
                                                `${categories.find(category => category.id === cate).name}, `
                                            )
                                        })
                                    }</Card.Subtitle>
                                    <Card.Text>
                                        {author.desc}
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