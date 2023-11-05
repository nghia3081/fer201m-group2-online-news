import { Col, Container, Row } from "react-bootstrap"
import Comment from "./user/comments/comment"
import { useParams } from "react-router-dom"
import CommentEditor from "./user/comments/comment-editor"
import useCommentService from "../apis/comment"
import { useEffect, useState } from "react"
import usePostService from "../apis/post"

const PostDetail = () => {
    let id = useParams()
    const [posts, setPosts] = useState([])
    const postService = usePostService()
    useEffect(() => {
        postService.getPost().then(res => {
            setPosts(res)
        })
    }, [])

    let post = posts.find(post => post.id == id.id)
    const [comments, setComments] = useState([])
    const commentService = useCommentService()

    useEffect(() => {
        commentService.getCommentByPostId(id.id).then(res => {
            setComments(res)
        })
    }, [])

    const onComment = () => {
        commentService.getCommentByPostId(id.id).then(res => {
            setComments(res)
        })
    }

    return (
        <Container style={{ maxWidth: "800px" }}>
            <h3 style={{ textAlign: "center" }}>{post?.title}</h3>
            <p style={{ textAlign: 'end' }}>{new Date().toISOString()}</p>
            <img src={post?.image_src} alt="" style={{ width: '800px' }} />
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: post?.content }} />
            <hr></hr>

            <Row style={{ backgroundColor: '#F7F7F7', margin: '10px', padding: '10px'}}>
                <h4>Ý kiến</h4>
                <CommentEditor onComment={() => onComment()}/>
                <hr />
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