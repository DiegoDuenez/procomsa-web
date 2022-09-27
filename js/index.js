function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  

var lastScrollTop = 0
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop

    if (scrollTop > "20" ) {
        $('.navbar__bg').css('top','0')
    }
    else {
        $('.navbar__bg').css('top','-8rem')
    }
    lastScrollTop = scrollTop
})


$('.dot').click(function(){
    clearDots(this);
})


$(window).scroll(function() {

    let inicioTarget = $('body').position().top;
    let inicioDot = $(".dot__out[href='#']")

    let nosotrosTarget = $('#nosotros').position().top;
    let nosotrosDot = $(".dot__out[href='#nosotros']")

    let serviciosTarget = $('#servicios').position().top;
    let serviciosDot = $(".dot__out[href='#servicios']")

    let coberturaTarget = $('#cobertura').position().top;
    let coberturaDot = $(".dot__out[href='#cobertura']")

    
    let proyectosTarget = $('#proyectos').position().top;
    let proyectosDot = $(".dot__out[href='#proyectos']")

   
    if($(window).scrollTop() >= nosotrosTarget && $(window).scrollTop() < serviciosTarget) {
        clearDots(nosotrosDot)
    }
    if($(window).scrollTop() >= serviciosTarget && $(window).scrollTop() < coberturaTarget) {
        clearDots(serviciosDot)
    }
    if($(window).scrollTop() >= coberturaTarget  && $(window).scrollTop() < proyectosTarget) {
        clearDots(coberturaDot)
    }
    if($(window).scrollTop() >= proyectosTarget){
        clearDots(proyectosDot)
    }

    if($(window).scrollTop() < nosotrosTarget){
        clearDots(inicioDot)
    }


});

function clearDots(dot){
    let dots = document.getElementsByClassName("dot__out");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }
    $(dot).addClass('dot--active')
}