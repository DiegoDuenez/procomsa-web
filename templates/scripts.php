<script src="libs/jquery/jquery.min.js"></script>
<script src="libs/glider/glider.min.js"></script>
<script src="libs/aos/dist/aos.js"></script>
<script src="libs/menu/menu.min.js"></script>
<script src="libs/sweetalert2/sweetalert2.all.min.js"></script>     
<script src="js/index.js"></script>
<script src="js/carrusel.js"></script>
<script src="js/menu.js"></script>
<script src="js/modal.js"></script>
<script src="js/mail.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

<script>
    $('#menu').css('display', 'flex')
    menu = new Menu({options: {openWith: '.open', closeWith: '.close', size:'lg', direction: 'right', element: '.menu'}})
    menu.init();
    AOS.init();
</script>
