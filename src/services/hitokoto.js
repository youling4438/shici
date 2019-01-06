
import { callFn } from './callApi'
export default {
    get() {
        const url = 'https://v1.hitokoto.cn/';
        const withCredentials = false;
        return callFn({ url, withCredentials });
    },
}
