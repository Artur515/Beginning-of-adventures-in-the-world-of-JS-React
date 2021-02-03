import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer/reducer";
import {initThunk} from "../thunks/initThunk";


const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middlewares))

store.dispatch(initThunk())

console.log(store.getState())
// const init=()=>{
//     return async (dispatch,getState)=>{
//         const {token}=store.getState().auth
//         if(token){
//             await dispatch()
//         }
//     }
//
// }
//

export default store