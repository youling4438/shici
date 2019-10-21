export const callFn = ({
    url,
    withCredentials,
    header,
    methond = "GET",
    params
}) => {
    try {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (withCredentials) {
                xhr.withCredentials = true;
            }
            xhr.open(methond, url, true);
            header && xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(methond == "POST" ? JSON.stringify(params) : "");
        });
    } catch (err) {
        throw new Error(err);
    }
};
