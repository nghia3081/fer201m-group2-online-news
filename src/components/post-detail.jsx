import { Col, Container, Row } from "react-bootstrap"
import Comment from "./user/comment"
import { useParams } from "react-router-dom"
import posts from "../data/post"

const PostDetail = () => {
    let id = useParams()
    let post = posts.find(post => post.id == id.id)
    return (
        <Container style={{maxWidth: "800px"}}>
            <h3 style={{ textAlign: "center" }}>{post.title}</h3>
            <p style={{ textAlign: 'end' }}>{new Date().toISOString()}</p>
            <img src={post.image_src} alt="" style={{width: '800px'}}/>
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: post.content }} />

            <Row>
                {/* {[...Array(10).keys()].map((value, i) => {
                    return (
                        <Col md={12} className="m-2" key={i}>
                            <Comment></Comment>
                        </Col>
                    )
                })} */}
            </Row>

        </Container>
    )
}
export default PostDetail