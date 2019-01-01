
import { callFn } from './callApi'
export default {
    get() {
        const url = 'https://api.gushi.ci/all.json';
        return callFn(url);
    },
}
