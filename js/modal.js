
$('.openModal').click(function(){
    $('body').css('overflow','hidden')
    // animateCSS('#img1', 'slideInDown');
    // animateCSS('#img2', 'slideInLeft');
    // animateCSS('#img3', 'slideInUp');
})

$('.closeModal').click(function(){
    // animateCSS('#img1', 'slideOutUp');
    // animateCSS('#img2', 'slideOutRight');
    // animateCSS('#img3', 'slideOutDown');
    $('body').css('overflow','auto')
})
