var slider = new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll:1,
    draggable: false,
    responsive: [
        {
          breakpoint: 300,
          settings: {
            draggable: true
          }
        },
        {
        breakpoint: 800,
        settings: {
            draggable: false
        }
        }
    ]
})


slideAutoPlay(slider, '.glider');
function slideAutoPlay(glider, selector, delay = 4000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;
    function slide() {

        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);

                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }
    slide();
    var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);
    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);
}




$('#btnAnterior').hover(function(){
    $('.card').css('transform', 'translateX(20px)')
}, function(){
    $('.card').css('transform', 'none')
})

$('#btnSiguiente').hover(function(){
    $('.card').css('transform', 'translateX(-20px)')
}, function(){
    $('.card').css('transform', 'none')
})

$('.tabTipo').click(function(){
  var idtipo_proyecto = $(this).data('myval');
  if (idtipo_proyecto == "1") {
    $("#residencial").fadeIn();
    $("#vertical").fadeOut();
  }
  else if (idtipo_proyecto == "2") {
    $("#residencial").fadeOut();
    $("#vertical").fadeIn();
  }
});
