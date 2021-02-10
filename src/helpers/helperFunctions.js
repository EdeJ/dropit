
// TODO naar map helpers

export function getLocalUser() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"))
    }
}

export function setLocalUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

export function getAccessToken() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user")).accessToken
    }
}