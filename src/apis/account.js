
import useAxios from "../hooks/useAxios"
const baseURI = "accounts"
const useAccountService = () => {
    const axios = useAxios();
    const getMyProfile = () => {
        const userId = localStorage.getItem("userId")
        if (!userId) {
            return Promise.resolve(null);
        }
        return axios
            .get(`${baseURI}/${userId}`)
    }
    const logout = () => {
        localStorage.removeItem('userId');
        window.location.href = "/"
    }
    const login = (user) => {
        if (user == null) {
            return Promise.reject("Please input username and password");
        }
        return axios
            .get(`${baseURI}?username=${user.username}&password=${user.password}`)
            .then(res => {
                if (res.length == 0) {
                    alert("Username or password is invalid")
                    return Promise.reject("Not found user");
                }
                localStorage.setItem("userId", res[0].id);
                return Promise.resolve(res);
            })
    }
    const updateUser = (user) => {
        if (user == null) {
            return Promise.reject("Invalid user information");
        }
        return axios.put(`${baseURI}/${user.id}`, user)
    }
    const register = (user) => {
        if (user == null) {
            return Promise.reject("Invalid user information");
        }
        return axios
            .get(`${baseURI}?username=${user.userrname}`)
            .then(res => {
                if (res.length > 0) {
                    return Promise.reject("Username existed")
                }
                return axios.post(`${baseURI}`, user)
            })
    }
    const getEditorial = () => {
        return axios.get(`${baseURI}?role=2`);
    }
    const getAuthorOfCategory = (categoryId) => {
        return axios.get(`categories/${categoryId}/accounts`)
    }
    return {
        login,
        updateUser,
        getMyProfile,
        logout,
        register,
        getEditorial,
        getAuthorOfCategory
    }

}

export default useAccountService