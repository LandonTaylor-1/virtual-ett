import {combineReducers} from "redux";
import {SET_COLOR_LEFT} from '../actions/index';
import {SET_COLOR_RIGHT} from '../actions/index';
import {SET_LOCATION_RIGHT} from '../actions/index';
import {SET_LOCATION_LEFT} from '../actions/index';
import {SET_PES_VIEW_LEFT} from '../actions/index';
import {SET_PES_VIEW_RIGHT} from '../actions/index';
import {SET_ADMIN} from '../actions/index';
import {SET_CLIENT} from '../actions/index';

function colorLeft(state="",action){
  if(action.type === SET_COLOR_LEFT) {
    return action.value;
  }
  return state;
}

function locationLeft(state="",action){
  if(action.type === SET_LOCATION_LEFT) {
    return action.value;
  }
  return state;
}

function colorRight(state="",action){
  if(action.type === SET_COLOR_RIGHT) {
    return action.value;
  }
  return state;
}

function locationRight(state="",action){
  if(action.type === SET_LOCATION_RIGHT) {
    return action.value;
  }
  return state;
}

function pesViewLeft(state=[],action){
  if(action.type === SET_PES_VIEW_LEFT) {
    return action.value;
  }
  return state;
}

function pesViewRight(state=[],action){
  if(action.type === SET_PES_VIEW_RIGHT) {
    return action.value;
  }
  return state;
}

function admin(state="",action){
  if(action.type === SET_ADMIN) {
    return action.value;
  }
  return state;
}

function client(state="",action){
  if(action.type === SET_CLIENT) {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  colorLeft,
  colorRight,
  locationRight,
  locationLeft,
  pesViewLeft,
  pesViewRight,
  admin,
  client
});
export default rootReducer;
