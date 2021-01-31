
export const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))
    if (currentUser && currentUser.accessToken) {
        return {access_token:'Bearer'+ currentUser.accessToken}
    } else {
        return {}
    }
}


