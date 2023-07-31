$(document).on('click', '#scrolltop', function(){
     $('html, body').stop().animate({
          'scrollTop':0
      }, 2000, 'swing')
});

// SMOOTH NAV SCROLL 
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
