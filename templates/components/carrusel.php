<div class="container-glider" >
    <div class="carrusel__button">
        <button aria-label="Anterior" id="btnAnterior" onclick="slider.scrollItem(slider.slide-1)"><i class="fa-solid fa-angle-left"></i></button>
    </div>
    <div class="glider" id='residencial'>
      <?php include('residencial.php'); ?>
    </div>
    <div class="glider" id='vertical' style='display:none'>
      <?php include('vertical.php'); ?>
    </div>
    <div class="carrusel__button">
        <button aria-label="Siguiente" id="btnSiguiente" onclick="slider.scrollItem(slider.slide+1)"><i class="fa-solid fa-angle-right"></i></button>
    </div>
</div>
