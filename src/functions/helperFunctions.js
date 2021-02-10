
// TODO naar map helpers

export function getUser() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"))
    }
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

export function getAccessToken() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user")).accessToken
    }
}