(function () {
    window.addEventListener('orientationchange', function (e) {
        console.log(this.document.body.clientWidth, e.target.screen.width);
        this.document.body.width = e.target.screen.width;
        console.log(this.document.body.width, this.document.body.clientWidth);
    });
})();
