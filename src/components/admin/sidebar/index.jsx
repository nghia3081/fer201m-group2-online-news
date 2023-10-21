import AdminSideBar from "./AdminSideBar";
import AuthorSideBar from "./AuthorSideBar";
import EMSideBar from "./EMSideBar";

const SideBar = () => {

    const user = JSON.parse(localStorage.getItem("user")) ?? { role: 3};


    return (
        <div className="w-100 h-100">
            {user.role === 1 && <AdminSideBar></AdminSideBar>}
            {user.role === 2 && <EMSideBar></EMSideBar>}
            {user.role === 3 && <AuthorSideBar></AuthorSideBar>}
        </div>

    )
}
export default SideBar