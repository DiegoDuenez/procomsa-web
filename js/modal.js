$('.openModal').click(function(){
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
          var galeria_proyecto = JSON.parse($.ajax({ type: 'POST', url : urlPost, data : data2, async : false }).responseText);

          if (json[0].link_proyecto) {
            $('#modalVideo').attr("src", json[0].link_proyecto + "?autoplay=1");
            $('.modal__imagenes').hide();
            $('#modalVideo').fadeIn();
            $('.closeModal').prop('linkvideo', json[0].link_proyecto);
            $('.closeModal').prop('autoplay', json[0].link_proyecto + "?autoplay=1");
          }
          else{
            $('#modalVideo').hide();
            $('.modal__imagenes').removeClass('modal__row--hide');
            $('.modal__imagenes').fadeIn();
            $('.closeModal').prop('linkvideo', "0");
            $('.closeModal').prop('autoplay', "0");
          }

          if (galeria_proyecto.length > 0) {
            if (galeria_proyecto[0].ruta) {
              $("#img1").attr("src", `admin/${galeria_proyecto[0].ruta}`);
            }
            if (galeria_proyecto[1].ruta) {
              $("#img2").attr("src", `admin/${galeria_proyecto[1].ruta}`);
            }
            if (galeria_proyecto[2].ruta) {
              $("#img3").attr("src", `admin/${galeria_proyecto[2].ruta}`);
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
    $("#modalVideo").attr("src", $(this).prop('linkvideo'));
    $('.modal').removeClass('open--bottom')
    $('body').css('overflow','auto');
})

$(document).keyup(function(e) {
    if (e.key === "Escape" && $('.modal').hasClass('open--bottom')) {
        $('.closeModal').trigger('click');
    }
})

$('#btnModalAnterior').click(function(){
    $('#modalVideo').hide();
    $('.modal__imagenes').removeClass('modal__row--hide');
    $('.modal__imagenes').fadeIn();
    $("#modalVideo").attr("src", $(".closeModal").prop('linkvideo'));
})

$('#btnModalSiguiente').click(function(){
    if ($('.closeModal').prop("autoplay") != "0") {
      $('.modal__imagenes').hide();
      $('#modalVideo').fadeIn();
      $("#modalVideo").attr("src", $(".closeModal").prop('autoplay'));
    }
})
