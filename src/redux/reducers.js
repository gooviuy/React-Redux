import { CAMBIAR_NOMBRE } from "./constants";

export function reducers(state, action) {
  if (action.type === CAMBIAR_NOMBRE) {
    return { ...state, nombre: action.payload };
  }

  return state;
}
