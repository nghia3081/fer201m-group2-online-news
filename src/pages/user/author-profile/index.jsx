import { Card, Col, Container, Image, Row } from "react-bootstrap"
import Post from "../../../components/post"
import authors from "../../../data/author"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import usePostService from "../../../apis/post";

const AuthorProfile = () => {
    const { id } = useParams();
    const author = authors.find((element) => element.id == id);
    const [posts, setPosts] = useState([])
    const postService = usePostService
    useEffect(() => {
        postService.getPostByAuthorId(id).then(
            (res) => setPosts(res)
        )
    }, [])

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
        <Card className="mb-2 mt-2">
            <Card.Header className="text-center">{author.name}</Card.Header>
            <Card.Body className="text-left">
                <ol>
                    <li>
                        <Card.Text>
                            Ngày sinh: {author.detail?.dateOfBirth}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Nơi sinh: {author.detail?.address}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Trình độ học vấn: {author.detail?.education}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Sự nghiệp: {author.detail?.career}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Sở thích: {author.detail?.hobby}
                        </Card.Text>
                    </li>
                </ol>

            </Card.Body>
        </Card>
        <Row style={{textAlign: 'center'}}>
            <h3>Các bài viết</h3>
        </Row>
        <Row>
            {
                posts.map(post => {
                    return (<Col md={6} key={post.id} className="mb-2">
                        <Post post={post}/>
                    </Col>)
                })
            }
        </Row>
    </Container>)
}
export default AuthorProfile