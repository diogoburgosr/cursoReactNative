import { LOAD_PONEYS, LOGIN, LOGOUT } from "./constants";
import { loadPoneysAPI } from "./api";

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
