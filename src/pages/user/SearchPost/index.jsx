import { Col, Container, Row } from "react-bootstrap"
import Post from "../../../components/post";
import categories from "../../../data/category";
import posts from "../../../data/post";

const  SearchPost = () => {
    
    return (


        <Container>
            <Row style={{justifyContent: 'center'}}>
                <Col md={6}>
                    <Row>
                        {
                            posts.filter().map((value, i) => {
                                return (<Col md={12} key={i} className="mb-2">
                                    <Post>

                                    </Post>
                                </Col>)
                            })
                        }
                    </Row>


                </Col>
            </Row>
        </Container>

    )
}
export default SearchPost;