import users from "../data/user"

const useUserService = () => {
    const login = (user) => {
        if (user == null) {
            return Promise.reject("Please input username and password");
        }
        let foundUser = users.find((u) => {
            return u.username === user.username && u.password === user.password
        })
        if (foundUser) {
            return Promise.resolve(foundUser);
        }
        return Promise.reject("Not found user");
    }


    return {
        login
    }

}

export default useUserService