const elementBannerSlide = document.querySelector('.banner__swiper-slide')

if(elementBannerSlide != null){
    const flickitySliderHome = new Flickity(elementBannerSlide, {
        fade: false,
        pageDots: true,
        prevNextButtons: false,
        autoPlay: 4000,
        on: {
            ready: function(){
                document.querySelectorAll('.banner__swiper-slide li:not(:first-child) .banner__media').forEach(e=>{
                    e.style.display = "block";
                })
                document.querySelectorAll('.banner_message').forEach(element => {
                    if(element.textContent != '')
                    element.style.display = "block";
                })
            }
        },
    });
    flickitySliderHome.on('pointerUp', function (event, pointer) {
        flickitySliderHome.player.play();
    });
}