
import { callFn } from './callApi'
export default {
    get() {
        const url = 'https://v1.hitokoto.cn/';
        return callFn(url);
    },
}
