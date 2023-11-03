import React from "react";
import Add from "../Add";
import AddRedux from "./AddRedux";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";
import CounterReducer from "./CounterReducer";
import CounterRedux from "./CounterRedux";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <Counter1 />
      <Counter2 />
      <HelloRedux />
      <CounterReducer />
      <CounterRedux />
      <TodoForm />
    </div>
  );
};

export default ReduxExamples;
