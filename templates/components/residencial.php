<?php
if (file_exists("admin/mysql/Proyectos/Proyectos.php")) {
  require_once("admin/mysql/Proyectos/Proyectos.php");
} else if (file_exists("../../admin/mysql/Proyectos/Proyectos.php")) {
  require_once("../../admin/mysql/Proyectos/Proyectos.php");
}
$Proyectos = new Proyectos();
$ListaProyectos = json_decode($Proyectos->cargarProyectos(), true);
foreach ($ListaProyectos as $proyecto) {
  if ($proyecto["status"] == "1") {
    $imagen_principal = $proyecto["imagen_principal"];
    $nombre = $proyecto["nombre"];
    $ciudad = $proyecto["ciudad"];
    $id_proyecto = $proyecto["id_proyecto"];
    $idtipo_proyecto = $proyecto["idtipo_proyecto"];

    if ($idtipo_proyecto == "1") {
      echo "<div class='card'>
      <div class='card__image'>
      <img src='admin/$imagen_principal' alt='' loading='lazy' >
      </div>
      <div class='card__information'>
      <div class='card__header'>
      <!--<p class='card__title '>FRACCIONAMIENTO</p>-->
      </div>
      <div class='card__body'>
      <p class='card__text'>$nombre</p>
      <p class='card__text card__text--gold'>$ciudad</p>

      <button type='button' class='card__button hvr-sweep-to-top openModal' id='$id_proyecto'>VER PROYECTO</button>
      </div>
      </div>
      </div>";
    }
  }
}
?>
