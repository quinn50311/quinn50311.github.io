function setBannerImgWidth(img1El, img2El, img3El) {
    let img1Src = img1El.getAttribute('src');
    let img2Src = img2El.getAttribute('src');
    let img3Src = img3El.getAttribute('src');

    if (img1Src.split('/')[5] === '768' && document.getElementsByTagName('body')[0].clientWidth >= 768) {
        img1Src = img1Src.replace('768', '1024');
        img2Src = img2Src.replace('768', '1024');
        img3Src = img3Src.replace('768', '1024');
    } else if (img1Src.split('/')[5] === '1024' && document.getElementsByTagName('body')[0].clientWidth >= 1024) {
        img1Src = img1Src.replace('1024', '1920');
        img2Src = img2Src.replace('1024', '1920');
        img3Src = img3Src.replace('1024', '1920');
    } else if (img1Src.split('/')[5] === '1920' && document.getElementsByTagName('body')[0].clientWidth < 1024) {
        img1Src = img1Src.replace('1920', '1024');
        img2Src = img2Src.replace('1920', '1024');
        img3Src = img3Src.replace('1920', '1024');
    } else if (img1Src.split('/')[5] === '1024' && document.getElementsByTagName('body')[0].clientWidth < 768) {
        img1Src = img1Src.replace('1024', '768');
        img2Src = img2Src.replace('1024', '768');
        img3Src = img3Src.replace('1024', '768');
    }

    img1El.setAttribute('src', img1Src);
    img2El.setAttribute('src', img2Src);
    img3El.setAttribute('src', img3Src);
}

// function doImgShift(side) {

// }

(function () {
    // const leftImgEl = document.querySelector('.left-btn');
    // const rightImgEl = document.querySelector('.right-btn');
    // const imgBtn1El = document.querySelector('.img-btn-1');
    // const imgBtn2El = document.querySelector('.img-btn-2');
    // const imgBtn3El = document.querySelector('.img-btn-3');
    const img1El = document.querySelector('.img-1');
    const img2El = document.querySelector('.img-2');
    const img3El = document.querySelector('.img-3');

    window.addEventListener('resize', function () {
        setBannerImgWidth(img1El, img2El, img3El);
    });
})();
