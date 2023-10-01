function printWithDelay(text, ms) {
    return new Promise((write) => {
        setTimeout(() => {
            write(text);
        }, ms);
    });
}
printWithDelay("I live in Zaporozhia", 1000).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.error("Faile:", error);
});


