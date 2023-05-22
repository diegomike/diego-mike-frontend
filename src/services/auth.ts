function getAuthHeader() {
    const token = localStorage.getItem("accessToken");

    const authHeader = {
        headers: {
            Authorizations: `Bearer ${token}`
        }
    }

    return authHeader;
}

export { getAuthHeader }