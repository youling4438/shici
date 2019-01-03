import history from '../history'

export const CHANGE_ROUTER = 'CHANGE_ROUTER'

export const changeRouter = (router) => {
    history.push(router);
    return { 'type': CHANGE_ROUTER }
}
