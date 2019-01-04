export const CHANGE_SHICI = 'CHANGE_SHICI'
export const COLLECT_SHICI = 'COLLECT_SHICI'
export const CHANGE_SHICI_RESP = 'CHANGE_SHICI_RESP'
export const PREV_SHICI = 'PREV_SHICI'
export const NEXT_SHICI = 'NEXT_SHICI'

export const changeShici = () => ({
    'type': CHANGE_SHICI
})

export const collectShici = (index) => ({
    'type': COLLECT_SHICI,
    index
})

export const prevShici = (index) => ({
    'type': PREV_SHICI,
    index
})

export const nextShici = (index) => ({
    'type': NEXT_SHICI,
    index
})
