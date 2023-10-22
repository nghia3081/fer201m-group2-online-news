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
import SearchPost from "./SearchPost"


const UserPage = () => {

    return (
        <>
            <NavBar />

            <Routes  >
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/post/:id" element={<PostDetail></PostDetail>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
                <Route path="/author" element={<AuthorList></AuthorList>}></Route>
                <Route path="/author/:id" element={<AuthorProfile></AuthorProfile>}></Route>
                <Route path="/search" element={<SearchPost></SearchPost>}></Route>
            </Routes>


            <Footer></Footer>
        </>


    )
}
export default UserPage;