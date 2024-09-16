document.addEventListener("DOMContentLoaded", function() {

// preloader - start
// --------------------------------------------------
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () { $(this).remove(); });
  });
// preloader - end


//MOBILE menu

var menu = "close";
$(".mobile-menu .menu-toggle").click(function() {
    
    if (menu === "close") {
      $(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
      $(this).parent().parent().css("height", "450px");
       menu = "open";
    } else {
        $(this).parent().next(".mobile-nav").css("transform", "translate(-100%, 0)");
        $(this).parent().parent().css("height", "61px");
        menu = "close";
    }
});

// --------------------------------------------------
  // sticky-header - start
// -----------------------------------------------
  var headerId = $(".sticky-header");
  var headerTop = $(".sticky-header .top-header-section");

  $(window).on('scroll', function () {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 50) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
      headerTop.addClass("display-none");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
      headerTop.removeClass("display-none");
    }
  });

// --------------------------------------------------
  // sticky-header - end
// -----------------------------------------------


$('#menu').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
});

// --------------------------------------------------
  // service - start
// -------------------------------------


var specialTable = $('.service_section .special');
	$('.service-item').on('mouseover', function () {
	    specialTable.removeClass('active');
	}).on('mouseleave', function () {
	    specialTable.addClass('active');
    });

    // --------------------------------------------------
  // service - end
// -------------------------------------


// count js - start


  $(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });
  

// --------------------------------------------------
  // testimonial - start
// -------------------------------------

$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// --------------------------------------------------
  // testimonial - end
// -------------------------------------

// --------------------------------------------------
  // partner - start
// -------------------------------------


$('.latest').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// --------------------------------------------------
  // partner - end
// -------------------------------------

// --------------------------------------------------
  // partner - start
// -------------------------------------


$('.partner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// --------------------------------------------------
  // partner - end
// -------------------------------------


var header = document.getElementById("navbarNav");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// --------------------------------------------------
  // from - start
// -----------------------------------------------

$('#contact_form .contact-btn').click(function () {
    $.ajax({
        type: 'post',
        url: 'mail.php',
        data: $('#contact_form').serialize(),
        success: function () {
            $('#contact_form')[0].reset();
            $('#contact_form .contact-btn').attr('style', "background-color:#16C39A");
            $('#contact_form .contact-btn').siblings().html("<i style='color:#16C39A'>*</i> Email has been sent successfully");
        }
    });
    return false;
});

// --------------------------------------------------
  // from - end
// -----------------------------------------------


// -----------------------------------------------
 // top-to-back - start 
 // ----------------------------------------------
  if ($(window).scrollTop() < 100) {
    $('.top-to-bottom').hide();
  }
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.top-to-bottom').fadeIn('slow');
    } else {
      $('.top-to-bottom').fadeOut('slow');
    }
  });
  $('.top-to-bottom').click(function(){
    $('html, body').stop().animate({scrollTop:0}, 0, 'swing');
    return false;
  });
  
// -----------------------------------------------
 // top-to-back - end
 // ----------------------------------------------


// This is wow js

new WOW().init();



});