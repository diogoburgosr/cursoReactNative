import {
  LOAD_PONEYS,
  LOGIN,
  LOGOUT,
  TOGGLE_VIEW_DELETED_PONEYS,
  ADD_PONEY,
  UPDATE_PONEY
} from "./constants";
import { loadPoneysAPI, addPoneyAPI, updatePoneyAPI } from "./api";

export function updatePoney(data) {
  return dispatch => {
    updatePoneyAPI(data)
      .then(() => {
        dispatch({
          type: UPDATE_PONEY,
          data
        });
      })
      .catch(erro => {
        alert(error.message);
      });
  };
}

export function addPoney(data) {
  return dispatch => {
    addPoneyAPI(data)
      .then(res => {
        dispatch({
          type: ADD_PONEY,
          data: { ...data, _id: res.body }
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };
}
export function toggleViewDeletedPoneys() {
  return {
    type: TOGGLE_VIEW_DELETED_PONEYS
  };
}

export function login(data) {
  return {
    type: LOGIN,
    data
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function loadPoneys() {
  return dispatch => {
    loadPoneysAPI()
      .then(res => {
        dispatch({
          type: LOAD_PONEYS,
          data: res.body
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };
}
