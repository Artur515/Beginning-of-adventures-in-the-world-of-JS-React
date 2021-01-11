const initialState = {
    isAuth: false,
    token: localStorage.getItem('token'),
    currentUser: null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            }    
        case 'LOGIN':
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuth: false,
                token: null,
                currentUser: null
            }        
        default:
            return state    
    }
}