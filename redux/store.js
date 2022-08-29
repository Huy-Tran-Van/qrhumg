import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import mySaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddeware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddeware));
sagaMiddeware.run(mySaga);
