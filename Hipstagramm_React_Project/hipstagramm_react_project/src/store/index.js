import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer/reducer";
import {getAllUsersThunk} from "../thunks/usersThunk";




const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middlewares))
  store.dispatch(getAllUsersThunk())
store.dispatch(getAllUsersThunk())
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