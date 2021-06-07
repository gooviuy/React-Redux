import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import CambiarNombre from "./components/CambiarNombre";
import MostrarNombre from "./components/MostrarNombre";
import { useState } from "react";

const initalState = {
nombre: ""

};

function reducers(state, action) {
  if (action.type === "CAMBIAR_NOMBRE") {
    return {
      ...state,
      nombre: action.payload,
    };
    return state;
  }
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <MostrarNombre />
      <CambiarNombre />
    </Provider>
  );
}

export default App;
