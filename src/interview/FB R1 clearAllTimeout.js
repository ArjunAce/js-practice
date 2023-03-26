pendingTimeouts = new Set();
const clearAllTimeouts = () => {
    const iterator = pendingTimeouts.entries();
    for (const id of iterator) {
        console.log(id);
        pendingTimeouts.delete(id);
        clearTimeout(id);
    }
}
setTimeoutApi = setTimeout;
setTimeout = (cb, time) => {
    const id = setTimeoutApi(() => {
        pendingTimeouts.delete(id);
        cb();
    }, time);
    pendingTimeouts.add(id);
    return id;
}

setTimeout(() => {
    console.log('After 2 second');
}, 2000);
setTimeout(() => {
    clearAllTimeouts();
}, 1000)