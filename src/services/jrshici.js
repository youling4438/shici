
import { callFn } from './callApi'
export default {
    get() {
        const url = 'https://v2.jinrishici.com/one.json';
        const withCredentials = true;
        return callFn({ url, withCredentials});
    },
}
