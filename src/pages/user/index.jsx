import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../../components/user/footer"
import NavBar from "../../components/user/nav"
import HomePage from "./home"
import Login from "./login"
import Register from "./register"
import UserProfile from "./profile"
import AuthorList from "./author-list"
import AuthorProfile from "./author-profile"
import PostDetail from "../../components/post-detail"

const UserPage = () => {
    return (
        <>
            {window.location.pathname !== '/login' && <NavBar />}

            <Routes  >
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/post/:id" element={<PostDetail></PostDetail>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/profile" element={<UserProfile></UserProfile>} />
                <Route path="/author" element={<AuthorList></AuthorList>} />
                <Route path="/author/:id" element={<AuthorProfile></AuthorProfile>} />
                <Route path="/category/:id" element={<HomePage></HomePage>} />
            </Routes>

            {window.location.pathname !== '/login' && <Footer />}
        </>
    )
}
export default UserPage;