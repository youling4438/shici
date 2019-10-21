import { callFn } from "./callApi";
export default {
    get() {
        const url = "https://v2.jinrishici.com/one.json";
        const withCredentials = true;
        return callFn({ url, withCredentials });
    },
    insert(shici) {
        const url = "http://localhost:3001/shicis/add";
        return callFn({
            url,
            methond: "POST",
            header: { "Content-Type": "application/json" },
            params: shici.shici
        });
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
        console.log("url", url);
        return callFn({ url });
    }
};
