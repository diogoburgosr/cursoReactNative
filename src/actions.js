import {
  LOAD_PONEYS,
  LOGIN,
  LOGOUT,
  TOGGLE_VIEW_DELETED_PONEYS,
  ADD_PONEY,
  UPDATE_PONEY,
  DELETE_PONEY,
  SET_LOADING_STATUS
} from "./constants";
import {
  loadPoneysAPI,
  addPoneyAPI,
  updatePoneyAPI,
  deletePoneyAPI
} from "./api";

export function deletePoney(id) {
  return dispatch => {
    dispatch({
      type: SET_LOADING_STATUS,
      data: true
    });
    deletePoneyAPI(id)
      .then(() => {
        dispatch({
          type: DELETE_PONEY,
          data: id
        });
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          data: false
        });
      });
  };
}

export function updatePoney(data) {
  return dispatch => {
    dispatch({
      type: SET_LOADING_STATUS,
      data: true
    });
    updatePoneyAPI(data)
      .then(() => {
        dispatch({
          type: UPDATE_PONEY,
          data
        });
      })
      .catch(erro => {
        alert(error.message);
      })
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          data: false
        });
      });
  };
}

export function addPoney(data) {
  return dispatch => {
    dispatch({
      type: SET_LOADING_STATUS,
      data: true
    });
    addPoneyAPI(data)
      .then(res => {
        dispatch({
          type: ADD_PONEY,
          data: { ...data, _id: res.body }
        });
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          data: false
        });
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
    dispatch({
      type: SET_LOADING_STATUS,
      data: true
    });
    loadPoneysAPI()
      .then(res => {
        dispatch({
          type: LOAD_PONEYS,
          data: res.body
        });
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          data: false
        });
      });
  };
}
