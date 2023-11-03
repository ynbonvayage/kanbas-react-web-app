import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "../a4/ReduxExamples/Counter1/counter1Reducer";
import counter2Reducer from "../a4/ReduxExamples/Counter2/counter2Reducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";

const store = configureStore({
  reducer: {
    todosReducer,
    helloReducer,
    counter1Reducer,
    counter2Reducer,
    counterReducer,
    addReducer,
  },
});
export default store;
