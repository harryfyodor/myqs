$(document).ready(function(){

    $('#attack').click(function(){
    $('#babyOut').animate({
      width: "+=150px"
    },2000);
      $('#babyIn').animate({
      width: "+=150px"
    },2000);
      $('#babyIn').animate({
      width: "-=150px"
    },2000);
    $('#babyOut').animate({
      width: "-=150px"
    },2000);
      $('#babyOut').animateRotate(360, 4000);
    });
});

$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};

$(document).ready(function() { 
  $('a[href*=#]').click(function() { 
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { 
      var $target = $(this.hash); 
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']'); 
      if ($target.length) { 
        var targetOffset = $target.offset().top; 
          $('html,body').animate({ 
            scrollTop: targetOffset 
          }, 1000); 
        return false; 
        } 
      } 
    }); 
});

$(document).ready(function(){
  $('.download>button').mouseover(
      function(){
    $('#green-android').css("opacity","1"); 
    $('#black-android>img').addClass('none');
    $('.download').css("top","200px");
    //$('#black-android img').addClass('none');  
    });
  $('.download>button').mouseleave(
    function(){
    $('#green-android').css("opacity","0"); 
    $('#black-android>img').removeClass('none');
    $('.download').css("top","50px");
    });
});

$(document).ready(function(){
  $('.descriptionOfAtp .Two #im1').click(function(){
    $(this).css("border-style","solid solid none solid");
    $('.descriptionOfAtp .Two #im2').css("border-style","none none solid none");
    $('#im2P').css("display","none");
    $('#im1P').css("display","block");
  })
  $('.descriptionOfAtp .Two #im2').click(function(){
    $(this).css("border-style","solid solid none solid");
    $('.descriptionOfAtp .Two #im1').css("border-style","none none solid none");
    $('#im2P').css("display","block");
    $('#im1P').css("display","none");
  })
});

$(document).on("pagecreate",".descriptionOfAtpDe",function(){
  $("#imPower").on("taphold",function(){
	$('.imContent').animate({
		width: "100%"
	},1000);
  });                       
});