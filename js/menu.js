

$('.open').click(function(){
    $('body').css('overflow','hidden')
    animateCSS('#img1', 'slideInLeft');
    animateCSS('#img2', 'slideInDown');
    animateCSS('#img3', 'slideInUp');

})

$('.close').click(function(){
    animateCSS('#img1', 'slideOutLeft');
    animateCSS('#img2', 'slideOutUp');
    animateCSS('#img3', 'slideOutDown');
    $('body').css('overflow','auto')

})


$('.menu__link').click(function(){
    clearLinks(this)
})

async function clearLinks(link){

    let links = document.getElementsByClassName("menu__link");
    for (i = 0; i < links.length; i++) {
        $(links[i]).removeClass(`menu__link--active`)
    }

    $(link).addClass('menu__link--active')
    animateCSS('#img1', 'slideOutUp');
    animateCSS('#img2', 'slideOutLeft');
    animateCSS('#img3', 'slideOutDown');

    await sleep(200);
    $('.menu').removeClass('open--right')
    $('body').css('overflow','auto')
   
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    console.log(currentScrollPos)
    if(currentScrollPos > 700){
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    prevScrollpos = currentScrollPos;

    }
    
}