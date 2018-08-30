var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$("#menuabout").click(function (e) { 
  e.preventDefault();
  window.scrollTo(0,15);
  $("#toggle").removeClass('active');
  $('#overlay').removeClass('open');      
});

$(".clickToFull").click(function (e){
  e.preventDefault();
  window.scrollTo(0,25);
})




$(".impact").text(" ");
$('.navbar-right').addClass('short');
$('.navigation2').addClass('onScrollnavigation2');
$('.logo').addClass('onScrolllogo');
$('.title').css({ "animation": "fadeInLeft 1s ease forwards" });
setTimeout(function () {
  $(".impact").text(" ").css({ "opacity": "1" });
  showText(".impact", "Impact a billion lives", 0, 35);
}, 1500);



$(window).scroll(function () {
  if ($(this).scrollTop() > 3 )  /*height in pixels when the navbar becomes non opaque*/ {
    $(".impact").css({ "opacity": "0" }).html(" ");
    $(".clickToFull").fadeOut();
    $(".button_container").addClass('short');
    $('.navbar-right').removeClass('short');
    $('.navigation2').removeClass('onScrollnavigation2').addClass("navbar-fixed-top");
    $('.logo').removeClass('onScrolllogo');
    $('.gitamlogo').fadeOut('fast');
    $('.title').css({ "animation": "fadeOutLeft 0.1s ease forwards" }); 
    $('.navigation2').delay(500).addClass("navbar-fixed-top");
    $(".menuabout").attr("href", "#about").click(function (e) { 
      e.preventDefault();
      $("#toggle").removeClass('active');
      $('#overlay').removeClass('open');        
    });   

  }
  else {
    $(".impact").text(" ").css({ "opacity": "1" });
    $(".clickToFull").fadeIn("slow");
    $(".button_container, .gitamlogo").removeClass('short');
    $('.navbar-right').addClass('short');
    $('.navigation2').addClass('onScrollnavigation2').removeClass("navbar-fixed-top");
    $('.logo').addClass('onScrolllogo');
    $('.gitamlogo').fadeIn('fast');
    $('.title').css({ "animation": "fadeInLeft 1s ease forwards" });
    setTimeout(function () {
      $(".impact").text(" ");
      showText(".impact", "Impact a billion lives", 0, 35);
    }, 1500);

    $(".menuabout").removeAttr("href");
  }

});

