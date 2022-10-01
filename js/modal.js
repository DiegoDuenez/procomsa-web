
$('.openModal').click(function(){
    $('body').css('overflow','hidden')
})

$('.closeModal').click(function(){
    $('body').css('overflow','auto')
})

$(document).keyup(function(e) {
    if (e.key === "Escape" && $('.modal').hasClass('open--bottom')) { 
        $('.modal').removeClass('open--bottom')
        $('body').css('overflow','auto')

   }
})


$('#btnModalAnterior').click(function(){

    $('#modalVideo').hide()
    $('.modal__imagenes').removeClass('modal__row--hide')
    $('.modal__imagenes').fadeIn()

})

$('#btnModalSiguiente').click(function(){

    $('.modal__imagenes').hide()
    $('#modalVideo').fadeIn()

})
