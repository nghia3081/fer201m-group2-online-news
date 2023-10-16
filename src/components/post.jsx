import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const Post = ({ titleOnTop }) => {
    const navigate = useNavigate();

    const OnPostClick = () => {
        navigate('/post/2')
    }

    return (

        <Card style={{ cursor: "pointer" }} onClick={() => OnPostClick()}>
            <Card.Body>
                {
                    titleOnTop ? <Card.Title>Post title</Card.Title> : <></>
                }
                <Row>
                    <Col>
                        <Card.Img src={`/logo192.png`} />
                    </Col>
                    <Col>
                        {
                            titleOnTop ? <></> : <Card.Title>Post title</Card.Title>
                        }
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>)

}
export default Post