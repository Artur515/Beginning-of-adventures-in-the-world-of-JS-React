import axios from "axios";
import {authHeader, instance} from "./auth_header_servise";

const API_URL = 'https://hipstagram-api.herokuapp.com'

export const getCurrentUser = () => {
    return instance.get('/users/current' )//можно так
}

export const getUserByID = () => {
    return axios.get(API_URL + '/users/:userId', {headers: authHeader()})
}

export const getUsersBylogin = () => {
    return axios.get(API_URL + '/users', {headers: authHeader()})
}

export const deleteUser = () => {
    return axios.delete(API_URL + '/users/:userId', {headers: authHeader()})
}

export const getFollowersAndFollowingOfUserByUserID = () => {
    return axios.get(API_URL + '/users/followersAndFollowing/:userId', {headers: authHeader()}).then((response) => {
        console.log(response.data)
    })
}

export const followUser = () => {
    return axios.get(API_URL + '/users/follow/:userId', {headers: authHeader()})
}

export const createPost = (form, title, img) => {
    return axios.post(API_URL + '/posts', {form, title, img}, {headers: authHeader()})
        .then((response) => {
            console.log(response)
        })
}

export const getPostById = () => {
    return axios.get(API_URL + '/posts/:postId', {headers: authHeader()})
        .then((response) => {
            console.log(response)
        })
}

export const likePost = () => {
    return axios.get(API_URL + '/posts/like/:postId', {headers: authHeader()})
        .then((response) => {
            console.log(response)
        })
}

export const getFeed=()=>{
    return axios.get(API_URL+'/posts/feed',{headers:authHeader()})
        .then((response)=>{
            console.log(response)
        })
}

export const getCommentsByPostId = (post,text) => {
    return axios.get(API_URL + '/comments/:postId', {headers: authHeader()})
        .then((response) => {
            console.log(response)
        })
}


export const createComment = () => {
    return axios.get(API_URL + '/comments', {headers: authHeader()})
        .then((response) => {
            console.log(response)
        })
}

