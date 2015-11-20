$(document).ready(function(){
  $('.pics').hover(function(){
    $('.title img').animate({
      opacity: 1
      },1000);                   
    });
});

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

/*$(document).ready(function(){
  $('#section1').scroll(function(){
    alert('hello');
    $('#section1>div').css("background-color","black");
  })
});*/