<div class="proyectos" id="proyectos">
  <div class="proyectos__header" >
    <span class="title__line"></span><h2 class="title gs_reveal gs_reveal_fromLeft">PROYECTOS</h2>
  </div>
  <div class="proyectos__container" >
    <div class="proyectos__tabs">
      <?php
      require_once("admin/mysql/Proyectos/Proyectos.php");
      $Proyectos = new Proyectos();
      $TiposProyecto = json_decode($Proyectos->cargarTiposProyecto(), true);
      $i = 0;
      foreach ($TiposProyecto as $tipo) {
        if ($tipo["status"] == "1") {
          $idtipo_proyecto = $tipo["idtipo_proyecto"];
          $tipo_proyecto = $tipo["tipo_proyecto"];
          $active = $i == 0 ? "--active" : "";
          echo "<div class='proyectos__tab proyectos__tab$active tabTipo' data-myval='$idtipo_proyecto'>
          $tipo_proyecto
          </div>";
          $i++;
        }
      }
      ?>
    </div>
    <?php include 'templates/components/carrusel.php'; ?>
  </div>
</div>
