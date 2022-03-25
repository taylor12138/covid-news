import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// 引入reducer
import routerRudcer from "./router/routerRudcer";
// 暴露store
export default createStore(routerRudcer, applyMiddleware(thunk));
