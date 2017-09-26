function main() {
    var appComponent = $('#app');
    setInterval(function () {
        appComponent.text(generateRandomId());
    }, 1000);
}
//# sourceMappingURL=app.js.map