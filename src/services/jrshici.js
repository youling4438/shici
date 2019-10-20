import { callFn } from "./callApi";
export default {
    get() {
        const url = "https://v2.jinrishici.com/one.json";
        const withCredentials = true;
        return callFn({ url, withCredentials });
    },
    insert(shici) {
        const url = `http://localhost:3001/shicis/add?body=${JSON.stringify(
            shici
        )}`;
        return callFn({ url });
    },
    find(filter) {
        const url = `http://localhost:3001/shicis/find?body=${JSON.stringify(
            filter
        )}`;
        return callFn({ url });
    },
    delete(delItem) {
        const url = `http://localhost:3001/shicis/delete?body=${JSON.stringify(
            delItem
        )}`;
        return callFn({ url });
    }
};
