import { Button, Col, Container, Row,  Table} from "react-bootstrap"
import { useState } from "react"
import { useNavigate, useEffect } from "react";
import usePostService from "../../apis/post";

const PostManagementByAuthor = ({ id }) => {
    const postService = usePostService()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getPost().then(
            (res) => setPosts(res)
        )
    }, [posts])
    const navigate = useNavigate();

    const deletePost = (id) => {
        postService.deletePost(id).then(
            (res) => setPosts(res)
        )
    }
    return (
        <Container style={{ padding: '20px' }}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h4>Danh sách bài viết</h4>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col></Col>
                <Col md={2}>
                    <Button variant="primary" onClick={() => navigate('/manage/them-bai-viet')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Thêm bài viết
                    </Button>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên bài viết</th>
                            <th>Ngày đăng</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.public_date}</td>
                                    <td>
                                        <Button onClick={()=>deletePost(post.id)} variant='danger' >Xóa</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default PostManagementByAuthor