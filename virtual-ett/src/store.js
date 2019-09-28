import state from "./state";
import reducers from "./reducers/index";
import {createStore} from "redux";

const store = createStore(reducers,state);
export default store;
