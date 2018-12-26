
export default {
    change() {
        try {
            fetch("https://api.gushi.ci/all.json").then((result) => result.json());
        }
        catch (err) {
            throw new Error(err);
        }
    },
}
