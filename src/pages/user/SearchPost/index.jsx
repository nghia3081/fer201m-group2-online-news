import { Col, Container, Row } from "react-bootstrap"
import Post from "../../../components/post";
import categories from "../../../data/category";
import posts from "../../../data/post";
import { useSearchParams } from "react-router-dom";

const  SearchPost = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <Container>
            <Row style={{justifyContent: 'center'}}>
                <Col md={6}>
                    <Row>
                        {
                            posts.filter(p => p.title.toLowerCase().includes(searchParams.get("search").toLowerCase())).map((p) => {
                                return (
                                    <Col md={12} key={p.id} className="mb-2" style={{ display: 'flex' }}>
                                        <Post post={p} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Col>

                <Col md={6}>
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
                                                    <Col key={p.id} md={6} style={{ display: 'flex' }}>
                                                        <Post post={p} />
                                                    </Col>
                                                )
                                            })
                                        }


                                    </Row>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
export default SearchPost;