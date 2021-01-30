

export async function getUser() {
    JSON.parse(localStorage.getItem("user"))
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}