import { Col, Container, Row } from "react-bootstrap"
import Comment from "./user/comments/comment"
import { useParams } from "react-router-dom"
import posts from "../data/post"
import comments from "../data/comment"

const PostDetail = () => {
    let id = useParams()
    let post = posts.find(post => post.id == id.id)

    return (
        <Container style={{ maxWidth: "800px" }}>
            <h3 style={{ textAlign: "center" }}>{post.title}</h3>
            <p style={{ textAlign: 'end' }}>{new Date().toISOString()}</p>
            <img src={post.image_src} alt="" style={{ width: '800px' }} />
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: post.content }} />
            <hr></hr>

            <Row style={{ backgroundColor: '#ccc', margin: '10px', padding: '10px'}}>
                <h4>Ý kiến</h4>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </Row>

        </Container>
    )
}
export default PostDetail