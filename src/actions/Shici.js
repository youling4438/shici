export const CHANGE_SHICI = 'CHANGE_SHICI'
export const COLLECT_SHICI = 'COLLECT_SHICI'
export const CHANGE_SHICI_RESP = 'CHANGE_SHICI_RESP'

export const changeShici = () => ({
    'type': CHANGE_SHICI
})

export const collectShici = (index) => ({
    'type': COLLECT_SHICI,
    index
})
