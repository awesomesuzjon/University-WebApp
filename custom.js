 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 1
         },
         900: {
             items: 3
         }
     }
 })


 var btn = $('#scroll-top');
 $(window).scroll(function() {
     if ($(window).scrollTop() > 1000) {
         btn.addClass('show');
     } else {
         btn.removeClass('show');
     }
 });
 btn.on('click', function() {
     $('html, body').animate({
         scrollTop: 0
     }, 800);
     return false;
 });