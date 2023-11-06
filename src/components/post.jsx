import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const Post = ({ titleOnTop, post }) => {
    const navigate = useNavigate();

    const OnPostClick = () => {
        navigate(`/post/${post.id}`)
    }

    return (
        <Card style={{ cursor: "pointer", flex: '1 1 0' }} onClick={() => OnPostClick()}>
            <Card.Body>
                {
                    titleOnTop ? <Card.Title style={{fontSize: '15px'}}>{post.title}</Card.Title> : null
                }
                <Row>
                    <Col md={5}>
                        <Card.Img src={post.image_banner} />
                    </Col>
                    <Col md={7}>
                        {
                            titleOnTop ? null : <Card.Title style={{fontSize: '15px'}}>{post.title}</Card.Title>
                        }
                        <Card.Text style={{fontSize: '13px'}}>
                            {post.brief}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>)

}
export default Post