(function () {
    window.addEventListener('orientationchange', function () {
        this.document.querySelector('.img-1').style.transform =
            'translateX(' + -1 * this.document.querySelector('.img-1').clientWidth + 'px)';
        this.document.querySelector('.img-2').style.transform =
            'translateX(' + -2 * this.document.querySelector('.img-2').clientWidth + 'px)';
        this.document.querySelector('.img-3').style.transform =
            'translateX(' + -3 * this.document.querySelector('.img-3').clientWidth + 'px)';
    });
})();
