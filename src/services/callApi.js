
export const callFn = ({ url, withCredentials}) => {
    try {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (withCredentials) {
                xhr.withCredentials = true;
            }
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        })
    }
    catch (err) {
        throw new Error(err);
    }
};
