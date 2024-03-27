(function () {
    window.addEventListener('orientationchange', function (e) {
        this.document.querySelector('.img-1').style.width = e.target.screen.width + 'px';
        console.log(this.document.querySelector('.img-1').style.width);
    });
})();
