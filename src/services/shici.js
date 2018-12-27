
export default {
    change() {
        try {
            // const p = new Promise((resolve, reject) => {
            //     fetch("https://api.gushi.ci/all.json")
            // });
            // p.then((resolve) => {
            //     return resolve;
            // })
            const url = 'https://api.gushi.ci/all.json';
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.onload = () => resolve(xhr.responseText);
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send();
            })
        }
        catch (err) {
            throw new Error(err);
        }
    },
}
