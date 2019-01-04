export const CHANGE_HITOKOTO = 'CHANGE_HITOKOTO'
export const CHANGE_HITOKOTO_RESP = 'CHANGE_HITOKOTO_RESP'
export const COLLECT_HITOKOTO = 'COLLECT_HITOKOTO'
export const PREV_HITOKOTO = 'PREV_HITOKOTO'
export const NEXT_HITOKOTO = 'NEXT_HITOKOTO'

export const changeHitokoto = () => ({
    'type': CHANGE_HITOKOTO
})

export const collectHitokoto = (index) => ({
    'type': COLLECT_HITOKOTO,
    index
})

export const prevHitokoto = (index) => ({
    'type': PREV_HITOKOTO,
    index
})

export const nextHitokoto = (index) => ({
    'type': NEXT_HITOKOTO,
    index
})
