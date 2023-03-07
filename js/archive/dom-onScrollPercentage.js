function onScrollPercentage() {
    window.scrollPercentage = 0;
    window.onscroll = function() {
        const yOffset = (window.pageYOffset === 0 ? 0 : window.pageYOffset + window.innerHeight)
            , bodyHeigth = document.querySelector('body').scrollHeight
            ;
        scrollPercentage = Math.round(yOffset * 100 / bodyHeigth);
        console.log(scrollPercentage)
    }   
}