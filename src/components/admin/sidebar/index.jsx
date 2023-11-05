import { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AuthorSideBar from "./AuthorSideBar";
import EMSideBar from "./EMSideBar";
import useAccountService from "../../../apis/account";

const SideBar = () => {
    const [user, setUser] = useState({});

    const accountService = useAccountService();
    useEffect(() => {
        accountService
            .getMyProfile()
            .then(res => setUser(res));
    }, [])


    return (
        <div className="w-100 h-100">
            {user?.role === 1 && <AdminSideBar></AdminSideBar>}
            {user?.role === 2 && <EMSideBar></EMSideBar>}
            {user?.role === 3 && <AuthorSideBar></AuthorSideBar>}
        </div>

    )
}
export default SideBar