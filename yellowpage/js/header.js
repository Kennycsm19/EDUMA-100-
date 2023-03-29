$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });

  $(".menu-button").click(function(){
    $(this).toggleClass("is-active");
    $(".menu").toggleClass("active");
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('.menu, .menu-button').length) {
      if ($(".menu").hasClass("active")) {
        $(".menu").removeClass("active");
        $(".menu-button").removeClass("is-active");
      }
    }
  });

  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('red-bg');
    } else {
      header.classList.remove('red-bg');
    }
  });
});
