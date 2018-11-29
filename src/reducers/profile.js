import { LOGIN, LOGOUT, SET_LOADING_STATUS } from "../constants";

const initialState = {
  user: null,
  loading: false
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data
      };
    case LOGOUT:
      return { ...state, user: null };
    case SET_LOADING_STATUS:
      return { ...state, loading: action.data };
    default:
      return state;
  }
}
