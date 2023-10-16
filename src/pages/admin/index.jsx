import { Routes } from "react-router-dom"
import NavBar from "../../components/admin/nav"
import SideBar from "../../components/admin/sidebar"
import { Col, Row } from "react-bootstrap"


const AdminPage = () => {
    const user = JSON.parse(localStorage.getItem("user")) ?? {}
    return (
        <>

            {user?.role !== 1 &&
                <>
                    <NavBar>

                    </NavBar>
                    <Row style={{height:"85vh", margin:0}}>
                        <Col md={2} style={{height: "100%", backgroundColor: "darkred", paddingTop:"1rem"}}>
                            <SideBar></SideBar>
                        </Col>
                        <Col md={10}>
                            <Routes>                    </Routes>
                        </Col>
                    </Row>

                </>}

        </>

    )
}
export default AdminPage