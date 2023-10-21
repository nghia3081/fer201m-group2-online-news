import users from "../data/user"

const useUserService = () => {
    const getUser = () => {
        const user = localStorage.getItem("user")
        if (!user) {
            alert("please login");
            window.location.href = "/login"
            return
        }
        return JSON.parse(user);
    }
    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = "/"
    }
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
        return Promise.reject("Invalid username or password");
    }
    const updateUser = (user) => {
        if (user == null) {
            return Promise.reject("Invalid user information");
        }
        let indexUserToUpdate = users.findIndex((u) => {
            return u.username === user.username
        })

        if (indexUserToUpdate !== -1) {
            users[indexUserToUpdate] = { ...users[indexUserToUpdate], ...user }
            localStorage.setItem("user", JSON.stringify(users[indexUserToUpdate]))
            return Promise.resolve(users[indexUserToUpdate]);
        }
        return Promise.reject("Not found user");
    }
    const register = (user) => {
        if (user == null) {
            return Promise.reject("Invalid user information");
        }
        if (users.some(u => u.username === user.username)) {
            return Promise.reject("This username has been registered");
        }
        if (users.some(u => u.email === user.email)) {
            return Promise.reject("This email has been registered");
        }
        users.push(user);
        return Promise.resolve(user);
        
    }
    return {
        login,
        updateUser,
        getUser,
        logout,
        register
    }

}

export default useUserService