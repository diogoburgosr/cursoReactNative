import rootReducer from "./reducers";
import Reactotron from "./ReactotronConfig";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export default function configureStore() {
  const store = Reactotron.createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
