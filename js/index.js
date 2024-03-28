(function () {
    // 為了讓@keyframes的動畫重新渲染
    window.addEventListener('orientationchange', function () {
        this.document.styleSheets[1].cssRules[1].name = 'slider1';
        this.document.styleSheets[1].cssRules[1].name = 'slider';
    });
})();
