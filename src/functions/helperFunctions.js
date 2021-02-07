

export function getUser() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user")).accessToken
    }
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}