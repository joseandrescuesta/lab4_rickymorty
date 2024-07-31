export const setInc = (val) => {
    return {
        type: 'INCREMENTAR',
        inc: val
    }
}

export const setEps = (eps) => {
    return {
        type: 'EPISODIO',
        epis: eps
    }
}

export const setInfo = (infoper) => {
    return {
        type: 'INFORMACION',
        data: infoper
    }
}

export const setDetail = (detail) => {
    return {
        type: 'DETAIL',
        origin: detail
    }
}