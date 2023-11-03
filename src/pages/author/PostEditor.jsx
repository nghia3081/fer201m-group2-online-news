import { useState } from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import usePostService from "../../apis/post";

const PostEditor = () => {
    const [thumbnail, setThumbnail] = useState('')
    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [content, setContent] = useState('')
    const postService = usePostService()

    const handleEditor = (ev, editor) => {
        const data = editor.getData();
        setContent(data)
    }

    const handleSubmit = () => {
        let data = {
            thumbnail: thumbnail,
            title: title,
            brief: brief,
            content: content,
        }

        postService.createPost(data).then(res => {
            console.log("res", res);
        })
    }

    return (
        <Container style={{ padding: '20px' }}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h4>Bài viết</h4>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group as={Row} controlId="formFileMultiple" className="mb-3">
                        <Form.Label column sm="2">Link thumbnail:</Form.Label>
                        <Col sm='9'><Form.Control type="text" /></Col>

                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Tên bài viết:
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên bài viết ..."
                                required
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Mô tả:
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" placeholder="Nhập mô tả bài viết ..." required
                                onChange={(e) => {
                                    setBrief(e.target.value)
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Nội dung:
                        </Form.Label>
                        <Col sm="12">
                            {/* <Form.Control as="textarea" rows={3} placeholder="Nhập tên bài viết ..." /> */}
                            <CKEditor
                                editor={ClassicEditor}
                                onInit={editor => {
                                    console.log("editor", editor);
                                }}
                                onChange={handleEditor}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Thêm bài viết
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default PostEditor