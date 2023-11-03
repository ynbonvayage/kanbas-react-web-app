import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "../Counter1/counter1Reducer";
function CounterRedux() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment1())}>
        Increment </button>
      <button onClick={() => dispatch(decrement1())}>
        Decrement </button>
    </div>
  );
}
export default CounterRedux;