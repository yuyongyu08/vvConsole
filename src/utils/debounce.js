export default function debounce(cb, wait = 0) {
    let timer = null;

    return function (params) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            cb.apply(this, arguments);
        }, wait, params)
    }
}