//configStore.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import main from "./modules/main";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ main });

// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer);

export default store;
