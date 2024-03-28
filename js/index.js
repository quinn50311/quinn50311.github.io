(function () {
    window.addEventListener('orientationchange', function () {
        this.document.styleSheets[1].cssRules[1].name = 'slider1';

        this.document.styleSheets[1].cssRules[1].name = 'slider';
        console.dir(this.document.styleSheets[1].cssRules[1]);
    });
})();
