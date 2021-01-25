export const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))
    if (currentUser && currentUser.accessToken) {
        return {Authorization: 'Bearer' + currentUser.accessToken}
    } else {
        return {}
    }
}