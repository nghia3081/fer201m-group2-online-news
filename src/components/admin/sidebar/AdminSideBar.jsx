
import DefaultSideBar from "./default-side-bar/DefaultSideBar"

const menus = [
    // {
    //     url: 'so-luong-bai-viet',
    //     name: "Báo cáo số bài viết"
    // },
    // {
    //     url: 'bao-cao-theo-phan-loai',
    //     name: "Báo cáo theo phân loại"
    // },
    {
        url: 'bai-viet-nhieu-binh-luan',
        name: "Bài viết nhiều bình luận"
    },
    // {
    //     url: 'bao-cao-khu-vuc',
    //     name: "Báo cáo theo khu vực"
    // },
    {
        url: 'quan-ly-nguoi-kiem-duyet',
        name: "Quản lý người kiểm duyệt"
    }
]
const AdminSideBar = () => {
    return (
        <DefaultSideBar menus={menus} defaultUrl={menus[0].url} ></DefaultSideBar>
    )
}
export default AdminSideBar