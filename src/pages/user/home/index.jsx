import { Carousel, Col, Container, Row } from "react-bootstrap";
import Post from "../../../components/post";
import './style.css'
import { useEffect, useState } from "react";
import usePostService from "../../../apis/post";
import useCategoryService from "../../../apis/category";

const HomePage = () => {
    const postService = usePostService()
    const categoryService = useCategoryService()
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        postService.getPost().then(
           (res) => setPosts(res)
        )
        categoryService.getCategory().then(
            (res) => setCategories(res)
        )
    }, [])
    
    return (
        <Container>
            <Row>
                <Carousel>
                    {posts.slice(0, 3).map(post => {
                        return (
                            <Carousel.Item key={post.id}>
                                <img src={post.thumbnail} alt="" style={{width: '100%', height: '400px'}}/>
                                <Carousel.Caption>
                                    <h3>{post.title}</h3>
                                    <p>{post.brief}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Row>
            <hr />
            <Row style={{marginTop: '20px'}}>
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
