$(window).ready(function () {

  $("#search_icon").click(function () {
    $(".overly").fadeIn(100);
    $(".search_bar").fadeIn(100);
    $('body').addClass('active')
  });

  $('#close_btn , .overly').click(function () {
    $(".overly").fadeOut(500);
    $(".search_bar").fadeOut(500);
    $('body').removeClass('active');
  });
  //  cetegory slider

  $(".slider_2").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<a class="next"><i class="fas fa-chevron-left"></i></i></a>',
    nextArrow: '<a class="prev"><i class="fas fa-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".filter li").on('click', function () {
    var filter = $(this).data('filter');
    $(".slider_2").slick('slickUnfilter');

    if (filter == 'ring') {
      $(".slider_2").slick('slickFilter', '.ring');
    }
    else if (filter == 'diamond') {
      $(".slider_2").slick('slickFilter', '.diamond');
    }
    else if (filter == 'platinum') {
      $(".slider_2").slick('slickFilter', '.platinum');
    }
    else if (filter == 'all') {

      $(".slider_2").slick('slickUnfilter');
    }

  })

  // countdown js
  // function clock() {
  //   const second = 1000,
  //     minute = second * 60,
  //     hour = minute * 60,
  //     day = hour * 24;

  //   let birthday = "april 15 , 2021 00:00:00",
  //     countDown = new Date(birthday).getTime(),
  //     x = setInterval(function () {

  //       let now = new Date().getTime(),
  //         distance = countDown - now;

  //       let days = document.getElementById("days");
  //       if (typeof (days) != 'undefined' && days != null) {
  //         document.getElementById("days").innerText = Math.floor(distance / (day)),
  //         document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)), 
  //         document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  //         document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  //        }
      
  //     }, 0);
  // }

  // setInterval(function () {
  //   clock();
  // }, 1000);

  // filter color change on click 
  $(document).ready(function () {

    $(".filter li").click(function (event) {
      $(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

  });
  
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('.top_arrow').fadeIn(); 
      } else { 
          $('.top_arrow').fadeOut(); 
      } 
  }); 
  $('.top_arrow').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
    }); 
  
  
  
  
  
  
});

$(document).ready(function () {
  $("#tooltip_tag").toolbar({
    content: "#toolbar-options",
    position: "bottom",
  });
});

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    fade: true,
    // autoplay:true,
    autoplaySpeed: 10000,
    speed: 1000,
    dots: true,
    duration:1000, 
    prevArrow: '<a class="NextArrow"><i class="fas fa-angle-double-left"></i></a>',
    nextArrow: '<a class="PrevArrow"><i class="fas fa-angle-double-right"></i></a>',
    customPaging: function (slider, i) {
      return '<a class="bannerImage"><span></span></a>';
    },
  });
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  asNavFor: '.slider-nav',
	//  autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  prevArrow: '<a class="next text-white"><i class="fas fa-chevron-left"></i></i></a>',
  nextArrow: '<a class="prev text-white"><i class="fas fa-chevron-right"></i></a>',
  focusOnSelect: true

});
		
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2
});

// logo slider

$(document).ready(function () {
  $('.slider_3').slick({
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed: 10000,
    speed: 1000,
    dots: false,
    prevArrow: '<a class="NextArrow"><i class="fas fa-angle-double-left"></i></a>',
    nextArrow: '<a class="PrevArrow"><i class="fas fa-angle-double-right"></i></a>',
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});



//  client slider

$(document).ready(function () {
  $('.client_slider').slick({
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed: 10000,
    speed: 1000,
    dots: false,
    prevArrow: '<a class="NextArrow"><i class="fas fa-angle-double-left"></i></a>',
    nextArrow: '<a class="PrevArrow"><i class="fas fa-angle-double-right"></i></a>',
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show') || $(this).hasClass('fa-plus fas')) {
      $this.next().removeClass('show');
      $(this).removeClass('fa-minus').addClass('fa-plus');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $(this).addClass('fa-minus').removeClass('fa-plus');
  }
});

// $('.pluse_icon').on('click', function(){
//   if($(this).hasClass('fas fa-plus')){
//       $(this).removeClass('fas fa-plus').addClass('fas fa-minus');
//   }else{
//       $(this).addClass('fas fa-plus').removeClass('fa-minus');
//   }
// }); 



function showList(e) {
  var $gridCont = $('.grid-container');
  e.preventDefault();
  $gridCont.addClass('list-view');
}
function gridList(e) {
  var $gridCont = $('.grid-container')
  e.preventDefault();
  $gridCont.removeClass('list-view');
}

$(document).on('click', '.btn-grid', gridList);
$(document).on('click', '.btn-list', showList);

/*--------------*/


var incrementPlus;
var incrementMinus;

var buttonPlus = $(".plus");
var buttonMinus = $(".minus");

var incrementPlus = buttonPlus.click(function () {
    var $n = $(this).parent(".quantity").find(".qty");
    $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
    var $n = $(this).parent(".quantity").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
  });

// Main/Product image slider for product page
$('#detail .main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true, 
  arrows: true,
  fade:true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav',
  prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'
});

// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: false,
  draggable: true,
  speed:200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'  
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
});



  $( document ).ready(function() {
  	// content button toggle
  	$("#addBtn").click( function(){
	  		$(this).find('.add_remove').text( $(this).text() === "Add To wishlist" ? "Remove From wishlist" : "Add To wishlist" );
	  		$("#showWishlistBtn").toggle();

        if ($('.add_remove').attr('tooltip') === 'Add To wishlist') {
          $('.add_remove').attr('tooltip', 'Remove wishlist');
       }
       else {
          $('.add_remove').attr('tooltip', 'Add To wishlist');
       }
  	});
      
    $(".form_show_btn").click(function(){
      $(".product_revie").toggle();
    });
    
    $(".report").click(function (e) {
      var result = window.confirm('Are you sure you want to report this review as inappropriate?');
      if (result == true) {
        $(this).html('This review has been reported');
        $(this).addClass('text-muted');
      }    
    });


    $('.clear_cart').click(function(){
      $('.cart_table_wrapper').closest('.col-12').remove();
      $('.empty_cart').show();
      $('.summary_wrappeer').closest('.col-md-6').remove();
      $('.total_cart_wrapper').closest('.col-md-6').remove();
      $(".cart_count").html(0);
      $(".offcanvas .offcanvas-body .add_cart").remove();
      $(".offcanvas .offcanvas-body .total_price.bm_b #total_price").html("<span class='cerncy_symbole'>$</span>0")
    });

    $('.table_header .remove_col i').click(function(){
      $('.wishlist_table_wrapper').remove();
      $('.empty_wishlist').show();
      $(".cart_count").html(0);
    });
  });

    // Trash cart
    // $('.trash').click(function () {
    //   $('.add_cart.bm_b').fadeOut(900);
    // });
  $(".add_cart.bm_b .trash").click(function () {
    $(this).parent().closest('.add_cart.bm_b').fadeOut(setTimeout(function () { 
      $(this).remove();
    }, 2000));
  });

  $('.slider_4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<a class="next"><i class="fas fa-chevron-left"></i></i></a>',
    nextArrow: '<a class="prev"><i class="fas fa-chevron-right"></i></a>',
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
        // settings: "unslick"
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });

  $("td").click(function() {

    var tr = this.parentNode.rowIndex;
    var td = this.cellIndex;  

    $(this).removeClass('td"'+ tr +'"]');
    console.log(td);
    
  });


   