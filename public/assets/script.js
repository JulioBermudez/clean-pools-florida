$(document).ready(function() {
    $('.cube').hover(function() {
      $(this).toggleClass('paused');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;

        document.querySelectorAll('.seccion').forEach(function(seccion) {
            if (seccion.offsetTop <= currentScroll && (seccion.offsetTop + seccion.offsetHeight) > currentScroll) {
                var seccionID = seccion.id;
                window.location.hash = '#' + seccionID;
            }
        });
    });
});

  