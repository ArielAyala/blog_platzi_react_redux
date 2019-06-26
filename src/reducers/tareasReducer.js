import { TRAER_TODAS, CARGANDO, ERROR } from "../types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  usuario_id: '',
  titulo: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return { ...state, tareas: action.payload, cargando: false, error: "" };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    case "cambio_usuario_id":
      return { ...state, usuario_id: action.payload };
      case "cambio_titulo":
      return { ...state, titulo: action.payload };
    default:
      return state;
  }
};
