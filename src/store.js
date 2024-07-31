import { createStore } from "redux";

const estadoIni = {
    cont: 0,
    episodios: [],
    info: [],
    details: {}
}

const reducer = (state = estadoIni, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return { ...state, cont: state.cont + action.inc };
        case 'EPISODIO':
            return { ...state, episodios: action.epis };
        case 'INFORMACION':
            return { ...state, info: action.data };
        case 'DETAIL':
            return { ...state, details: action.origin };

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
