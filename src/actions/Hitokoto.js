export const CHANGE_HITOKOTO = 'CHANGE_HITOKOTO'
export const CHANGE_HITOKOTO_RESP = 'CHANGE_HITOKOTO_RESP'
export const COLLECT_HITOKOTO = 'COLLECT_HITOKOTO'

export const changeHitokoto = () => ({
    'type': CHANGE_HITOKOTO
})

export const collectHitokoto = (index) => ({
    'type': COLLECT_HITOKOTO,
    index
})
