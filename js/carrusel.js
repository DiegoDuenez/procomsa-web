var sliderOut  ;
$(document).ready(function(){

   
    cargarModal(1)

    
    

})



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


$('.proyectos__tab').click(function(){

    cargarModal($(this).attr('data-myval'))

})

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
    $("#enplaneacion").fadeOut();
  }
  else if (idtipo_proyecto == "2") {
    $("#residencial").fadeOut();
    $("#enplaneacion").fadeOut();
    $("#vertical").fadeIn();
  }
  else if (idtipo_proyecto == "3") {
    $("#residencial").fadeOut();
    $("#vertical").fadeOut();
    $("#enplaneacion").fadeIn();

  }
});


function cargarModal(id = undefined){

    $.ajax({
        url: 'admin/mysql/Proyectos/index.php',
        type: 'post',
        data: JSON.stringify({op: 'cargarProyectosTipo', idtipo_proyecto: id}),
        dataType: 'json',
        success: function (response) {


            $('.container-glider').empty()

            $('.container-glider').append(`
                <div class="carrusel__button">
                    <button aria-label="Anterior" id="btnAnterior" onclick="sliderOut.scrollItem(sliderOut.slide-1)"><i class="fa-solid fa-angle-left"></i></button>
                </div>
                <div class="glider" id='carrusel'>

                </div>
                
                <div class="carrusel__button">
                    <button aria-label="Siguiente" id="btnSiguiente" onclick="sliderOut.scrollItem(sliderOut.slide+1)"><i class="fa-solid fa-angle-right"></i></button>
                </div>
            `)
            
            for(var i = 0; i < response.length; i++){
                console.log(response[i])
                $('#carrusel').append(`
                <div  class='card'>
                    <div class='card__image'>
                    <img src='admin/${response[i].imagen_principal}' alt='Proyecto' loading='lazy' >
                    </div>
                    <div class='card__information'>
                    <div class='card__header'>
                    <!--<p class='card__title '>FRACCIONAMIENTO</p>-->
                    </div>
                    <div class='card__body'>
                    <p class='card__text'>${response[i].nombre}</p>
                    <p class='card__text card__text--gold'>${response[i].ciudad}</p>
                        <button type='button' class='card__button hvr-sweep-to-top openModal' id='${response[i].id_proyecto}'>VER PROYECTO</button>
                    </div>
                    </div>
                </div>
                `)

            }

            

            var slider = new Glider(document.querySelector("#carrusel"), {
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

            sliderOut = slider
            

            

           

            // slideAutoPlay(slider, '.glider');

        
        },
        error: function(xhr, status, error) {
            console.log(error)
            console.log(status)
            console.log(xhr)
           
        },
        complete : function(){
            $('.modal').css('display', 'flex')
            modal = new Menu({options: {openWith: '.openModal', closeWith: '.closeModal', size:'lg', direction: 'bottom', element: '.modal'}})
            modal.init();
        }
    });

}