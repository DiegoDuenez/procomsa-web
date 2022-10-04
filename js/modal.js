
var siguienteImagen = 0;
var anteriorImagen = 0;
var galeria_proyecto

var iframe;
var sliderModal;

$('.openModal').click(function(){
    siguienteImagen = 0
    anteriorImagen = 0
    var urlPost = 'admin/mysql/Proyectos/index.php';
    var idProyecto = this.id;
    $.ajax({
        type: 'POST',
        url : urlPost,
        data : { op: 'cargarProyecto' , id_proyecto : idProyecto },
        success : function(response){
          json = JSON.parse(response.trim());
          $(".modal__description").html(json[0].descripcion);
          var data2 = { op : 'cargarGaleria2', id_proyecto : idProyecto };
          galeria_proyecto = JSON.parse($.ajax({ type: 'POST', url : urlPost, data : data2, async : false }).responseText);

          $('#modal__galeria').empty()

          if (galeria_proyecto.length > 0) {
            
            $('#btnModalAnterior').show()
            $('#btnModalSiguiente').show()

            for(var i = 0; i < galeria_proyecto.length; i++){

              if(i == 0){
                $('#modal__galeria').append(`
                  <div class="carousel-item active">
                      <img class="d-block w-100"  src="admin/${galeria_proyecto[i].ruta}" alt="Slide ${i}">
                  </div>
                `)
              }
              else{
                $('#modal__galeria').append(`
                  <div class="carousel-item ">
                      <img class="d-block w-100"  src="admin/${galeria_proyecto[i].ruta}" alt="Slide ${i}">
                  </div>
                `)
              }

            }

            if (json[0].link_proyecto) {
           
                $('#modal__galeria').append(`
                  <div class="carousel-item ">
                    <div class="carousel-video-inner">
                      <iframe id='video-player'
                      allow="autoplay; encrypted-media"
                      src="${json[0].link_proyecto}">
                      </iframe> 
                    </div>
                </div> 
              `)
            }

            $('.closeModal').attr('iframesrc', json[0].link_proyecto)

          }
          else{
            $('#btnModalAnterior').hide()
            $('#btnModalSiguiente').hide()

            if (json[0].link_proyecto) {
             
              $('#modal__galeria').append(`
                <div class="carousel-item active ">
                  <div class="carousel-video-inner">
                    <iframe id='video-player'
                    allow="autoplay; encrypted-media"
                    src="${json[0].link_proyecto}?autoplay=1">
                    </iframe> 
                  </div>
                </div> 
              `)

              $('.closeModal').attr('iframesrc', json[0].link_proyecto)

            }
   
          }

      },
      error : function(e){
          console.log(e.responseText);
      },
      complete : function(){
          $('body').css('overflow','hidden');
      }
  });
})

$('.closeModal').click(function(){

  $("#video-player").attr('src', $(this).attr('iframesrc'))

  $('.modal').removeClass('open--bottom')
  $('body').css('overflow','auto');
  
})

$(document).keyup(function(e) {
    if (e.key === "Escape" && $('.modal').hasClass('open--bottom')) {
        $('.closeModal').trigger('click');
    }
})

$(function() {
  $(".carousel").on("slide.bs.carousel", function(e) {
    var prev = $(this)
      .find(".active")
      .index();

    var next = $(e.relatedTarget).index();
    var current = $(this).find('.active').index()

    const videoSlideSrc = $("#video-player").attr('src')
    var videoSlide = $("#video-player")
      .closest(".carousel-item")
      .index();

    if (next === videoSlide) {
      $("#video-player").attr('src', videoSlideSrc +"?autoplay=1" )
    } else {
      $("#video-player").attr('src', videoSlideSrc.split('?')[0])
    }
  });
});
