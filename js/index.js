// gsap.to(".nosotros__image", {
//     backgroundPosition: `50% ${-innerHeight / 2}px`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".image",
//       scrub: true
//     }, 
//   });
  
//   gsap.to(".nosotros", {
//     backgroundPosition: `50% ${-innerHeight / 3}px`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".container",
//       scrub: true
//     }, 
//   });


var lastScrollTop = 0
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop

    if (scrollTop > "30" ) {
        $('.navbar__bg').css('top','0')
    }
    else {
        $('.navbar__bg').css('top','-8rem')
    }
    lastScrollTop = scrollTop
})