export const CHANGE_JR_SHICI = 'CHANGE_JR_SHICI'
export const CHANGE_JR_SHICI_RESP = 'CHANGE_JR_SHICI_RESP'
export const COLLECT_JR_SHICI = 'COLLECT_JR_SHICI'
export const PREV_JR_SHICI = 'PREV_JR_SHICI'
export const NEXT_JR_SHICI = 'NEXT_JR_SHICI'
export const JR_SHICI_DETAIL = 'JR_SHICI_DETAIL'

export const changeJrShici = () => ({
    'type': CHANGE_JR_SHICI
})

export const collectJrShici = (index) => ({
    'type': COLLECT_JR_SHICI,
    index
})

export const prevJrShici = (index) => ({
    'type': PREV_JR_SHICI,
    index
})

export const nextJrShici = (index) => ({
    'type': NEXT_JR_SHICI,
    index
})

export const jrShiciDetail = (item) => ({
    'type': JR_SHICI_DETAIL,
    item
})
