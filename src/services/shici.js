
import { callFn } from './callApi'
export default {
    get() {
        const url = 'https://api.gushi.ci/all.json';
        const withCredentials = false;
        return callFn({ url, withCredentials });
    },
}
