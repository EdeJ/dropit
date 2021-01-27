

export async function getUser() {
    return await JSON.parse(localStorage.getItem("user"))
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}