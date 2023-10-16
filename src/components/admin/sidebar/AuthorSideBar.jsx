import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import DefaultSideBar from "./default-side-bar/DefaultSideBar"
const menus = [
    {
        url: 'bai-viet',
        name: "Quản lý bài viết"
    }
]
const AuthorSideBar = () => {
    return (
        <DefaultSideBar menus={menus} defaultUrl={menus[0].url} ></DefaultSideBar>
    )
}

export default AuthorSideBar