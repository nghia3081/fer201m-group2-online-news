import { Col, Container, Row } from "react-bootstrap";
import Post from "../../../components/post";
import categories from "../../../data/category";
import posts from "../../../data/post";
import './style.css'

const HomePage = () => {

    return (
        <Container>
            <Row></Row>
            <Row>
                <Col md={4}>
                    <Row>
                        {posts.slice(0, 8).map(post => {
                            return (
                                <Col md={12} key={post.id} className="mb-2" style={{ display: 'flex' }}>
                                    <Post titleOnTop post={post} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col md={8}>
                    <Row>
                        {categories.map((category) => {
                            let ps = posts.filter(post => post.category_id === category.id)
                            ps.slice(0, 2)
                            return (
                                <Col md={12} key={category.id} className="mb-2">
                                    <a href={`/${category.id}`} style={{ fontSize: '25px', textDecoration: 'none', fontWeight: '500', color: 'black', margin: '36px 0' }}>{category.name}</a><Row>
                                        {
                                            ps.map(p => {
                                                return (
                                                    <Col md={6} style={{ display: 'flex' }}>
                                                        <Post post={p} />
                                                    </Col>
                                                )
                                            })
                                        }


                                    </Row>
                                    <hr></hr>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default HomePage;
