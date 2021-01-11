const initialState = {
    isLoader: false
}

export const uiReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOADER_START':
            return {
                ...state,
                isLoader: true,
            } 
        case 'LOADER_STOP':
            return {
                ...state,
                isLoader: false,
            }                  
        default:
            return state    
    }
}