function customSetTimeout(callback, time) {
    new Promise((resolve) => {
        let now = Date.now();
        while (Date.now() < now + time) {}
        callback();
        resolve();
    });
}