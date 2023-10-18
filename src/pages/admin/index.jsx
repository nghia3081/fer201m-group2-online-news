import { Route, Routes } from "react-router-dom"
import NavBar from "../../components/admin/nav"
import SideBar from "../../components/admin/sidebar"
import { Col, Row } from "react-bootstrap"
import PostByComment from "./dashboard/post-most-comment"
import EditorialManagement from "./editorial-manage/editorial-manage"
import PostManagement from "../editorial/PostManagement"
import CommentManagement from "../editorial/CommentManagement"
import AuthorManagement from "../editorial/AuthorManagement"
import PostManagementByAuthor from "../author/PostManagement"
import { useEffect } from "react"


const AdminPage = () => {
    const user = JSON.parse(localStorage.getItem("user")) ?? {}
    return (
        <>

            {user && user.role !== 0 &&
                <>
                    <NavBar>

                    </NavBar>
                    <Row style={{ height: "85vh", margin: 0 }}>
                        <Col md={2} style={{ height: "100%", backgroundColor: "darkred", paddingTop: "1rem" }}>
                            <SideBar></SideBar>
                        </Col>
                        <Col md={10}>
                            <Routes>
                                <Route path="/bai-viet-nhieu-binh-luan" element={<PostByComment></PostByComment>}></Route>
                                <Route path="/quan-ly-nguoi-kiem-duyet" element={<EditorialManagement></EditorialManagement>}></Route>
                                <Route path="/quan-ly-bai-viet" element={<PostManagement></PostManagement>}></Route>
                                <Route path="/quan-ly-binh-luan" element={<CommentManagement></CommentManagement>}></Route>
                                <Route path="/quan-ly-tac-gia" element={<AuthorManagement></AuthorManagement>}></Route>
                                <Route path="/bai-viet" element={<PostManagementByAuthor></PostManagementByAuthor>}></Route>
                            </Routes>
                        </Col>
                    </Row>

                </>}

        </>

    )
}
export default AdminPage