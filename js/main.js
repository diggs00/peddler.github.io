
// Navigation menu
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu-nav-screen").fadeToggle(500);
    $(".top-burger").toggleClass("top-burger-animate");
    $(".mid-burger").toggleClass("mid-burger-animate");
    $(".bottom-burger").toggleClass("bottom-burger-animate");
    $(".logo-black").toggleClass("logo-white");
    $(".absolute-logo-left").toggleClass("fixed-logo-left");
    $(".absolute-hamburger").toggleClass("fixed-hamburger");
  });
});

// Scroll icon color change
// $(document).on('scroll',function(){
//    if($(document).scrollTop()>=$('#light').offset().top && $(document).scrollTop()<$('#dark').offset().top){ //assuming the about section has an id called about (#about)
//         $('.logo-white').removeClass('logo-white').addClass('logo-black');
//    }
//    else{
//         $('.logo-black').removeClass('logo-black').addClass('logo-white');
//    }
// });
