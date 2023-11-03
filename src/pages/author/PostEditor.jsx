import { useState } from "react"
import {  Col, Container, Row, Form } from "react-bootstrap"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const PostEditor = () => {
    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [content, setContent] = useState('')

    const handleEditor = (ev, editor) => {
        const data = editor.getData();
        setContent(data)
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
                </Form>
            </Row>
        </Container>
    )
}

export default PostEditor