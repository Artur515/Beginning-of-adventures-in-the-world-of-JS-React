// import {api} from "./api";
//
//
// export const getCurrentUserApi = () => {
//     return api.instance.get('/users/current')//можно так
// }
//
// export const getUserByIDApi = () => {
//     return api.instance.get('/users/:userId')
// }
//
// export const getUsersByLoginApi = () => {
//     return api.instance.get('/users')
// }
//
// export const deleteUserApi = () => {
//     return api.instance.delete('/users/:userId')
// }
//
// export const getFollowersAndFollowingOfUserByUserIDApi = () => {
//     return api.instance.get('/users/followersAndFollowing/:userId').then((response) => {
//         console.log(response.data)
//     })
// }
//
// export const followUserApi = () => {
//     return api.instance.get('/users/follow/:userId')
// }
//
// export const createPostApi = (form, title, img) => {
//     return api.instance.post('/posts', {form, title, img})
//         .then((response) => {
//             console.log(response)
//         })
// }
//
// export const getPostByIdApi = () => {
//     return api.instance.get('/posts/:postId')
//         .then((response) => {
//             console.log(response)
//         })
// }
//
// export const likePostApi = () => {
//     return api.instance.get('/posts/like/:postId')
//         .then((response) => {
//             console.log(response)
//         })
// }
//
// export const getFeedApi = () => {
//     return api.instance.get('/posts/feed')
//         .then((response) => {
//             console.log(response)
//         })
// }
//
// export const getCommentsByPostIdApi = (post, text) => {
//     return api.instance.get('/comments/:postId')
//         .then((response) => {
//             console.log(response)
//         })
// }
//
//
// export const createCommentApi = () => {
//     return api.instance.get('/comments')
//         .then((response) => {
//             console.log(response)
//         })
// }
//
