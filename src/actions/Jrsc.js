export const CHANGE_JR_SHICI = 'CHANGE_JR_SHICI'
export const CHANGE_JR_SHICI_RESP = 'CHANGE_JR_SHICI_RESP'
export const COLLECT_JR_SHICI = 'COLLECT_JR_SHICI'

export const changeJrShici = () => ({
    'type': CHANGE_JR_SHICI
})

export const collectJrShici = (index) => ({
    'type': COLLECT_JR_SHICI,
    index
})
