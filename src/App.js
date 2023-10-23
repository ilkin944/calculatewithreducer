import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
  display: "0",
  history: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      if (state.display === "0" || state.display === "Error") {
        return {
          ...state,
          display: action.payload.toString(),
          history: action.payload.toString()
        };
      } else {
        return {
          ...state,
          display: state.display + action.payload,
          history: state.history + action.payload
        };
      }
    case "CLEAR":
      return { ...state, display: "0", history: "" };
    case "EQUAL":
      try {
        const result = eval(state.history);
        return {
          display: result.toString(),
          history: state.history + "=" + result
        };
      } catch (error) {
        return { display: "Error", history: state.history + "=Error" };
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="history">{state.history}</div>
          <div className="output">{state.display}</div>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch({ type: "CLEAR" })}>C</button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 7 })}>
            7
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 8 })}>
            8
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 9 })}>
            9
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: "+" })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 4 })}>
            4
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 5 })}>
            5
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 6 })}>
            6
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: "-" })}>
            -
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 1 })}>
            1
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 2 })}>
            2
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 3 })}>
            3
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: "*" })}>
            *
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: 0 })}>
            0
          </button>
          <button onClick={() => dispatch({ type: "INPUT", payload: "." })}>
            .
          </button>
          <button onClick={() => dispatch({ type: "EQUAL" })}>=</button>
          <button onClick={() => dispatch({ type: "INPUT", payload: "/" })}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
