<script src="libs/jquery/jquery.min.js"></script>
<script src="libs/glider/glider.min.js"></script>
<script src="libs/aos/dist/aos.js"></script>
<script src="libs/menu/menu.min.js"></script>
<!-- <script src="libs/menu/modal.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.7/dist/sweetalert2.all.min.js"></script>     
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollToPlugin.min.js"></script>
<script src="js/index.js"></script>
<script src="js/carrusel.js"></script>
<script src="js/menu.js"></script>
<script src="js/modal.js"></script>

<!-- <script src="js/index.js"></script>
<script src="js/menu.js"></script>
<script src="js/mail.js"></script> -->

<script>

    menu = new Menu({options: {openWith: '.open', closeWith: '.close', size:'lg', direction: 'right', element: '.menu'}})
    menu.init();

    modal = new Menu({options: {openWith: '.openModal', closeWith: '.closeModal', size:'lg', direction: 'bottom', element: '.modal'}})
    modal.init();

    AOS.init();
</script>
