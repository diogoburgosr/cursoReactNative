import rootReducer from "./reducers";
import Reactotron from "./ReactotronConfig";
import { applyMiddleware } from "redux";

export default function configureStore() {
  const store = Reactotron.createStore(rootReducer, applyMiddleware());
  return store;
}
