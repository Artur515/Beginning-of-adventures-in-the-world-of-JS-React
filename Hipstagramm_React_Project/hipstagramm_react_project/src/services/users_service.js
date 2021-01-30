import axios from "axios";
import {authHeader, instance} from "./auth_header_servise";

const API_URL = 'https://hipstagram-api.herokuapp.com'

export const getCurrentUser = () => {
    return instance.get('/users/current')//можно так
}

export const getUserByID = () => {
    return instance.get('/users/:userId')
}

export const getUsersBylogin = () => {
    return instance.get('/users')
}

export const deleteUser = () => {
    return instance.delete('/users/:userId')
}

export const getFollowersAndFollowingOfUserByUserID = () => {
    return instance.get('/users/followersAndFollowing/:userId').then((response) => {
        console.log(response.data)
    })
}

export const followUser = () => {
    return instance.get('/users/follow/:userId')
}

export const createPost = (form, title, img) => {
    return instance.post('/posts', {form, title, img})
        .then((response) => {
            console.log(response)
        })
}

export const getPostById = () => {
    return instance.get('/posts/:postId')
        .then((response) => {
            console.log(response)
        })
}

export const likePost = () => {
    return instance.get('/posts/like/:postId')
        .then((response) => {
            console.log(response)
        })
}

export const getFeed = () => {
    return instance.get('/posts/feed')
        .then((response) => {
            console.log(response)
        })
}

export const getCommentsByPostId = (post, text) => {
    return instance.get('/comments/:postId')
        .then((response) => {
            console.log(response)
        })
}


export const createComment = () => {
    return instance.get('/comments')
        .then((response) => {
            console.log(response)
        })
}

