import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import DefaultSideBar from "./default-side-bar/DefaultSideBar"

const menus = [
    {
        url: 'quan-ly-bai-viet',
        name: "Quản lý bài viết"
    },
    {
        url: 'quan-ly-binh-luan',
        name: "Quản lý bình luận"
    },
    {
        url: 'quan-ly-tac-gia',
        name: "Quản lý tác giả"
    }
]
const EMSideBar = () => {
    return (
        <DefaultSideBar menus={menus} defaultUrl={menus[0].url} ></DefaultSideBar>
    )
}
export default EMSideBar