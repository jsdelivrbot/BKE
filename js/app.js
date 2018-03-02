$(function () {
  let openStatus = GetOpenStatus();
  $('#openStatus').text(openStatus);
});

function GetOpenStatus(){
  let msg = '';
  let d = new Date();
  let h = d.getHours();

  //Sunday
  if(d.getDay() === 0){
    if(h < 11){
      msg = 'Closed: Opening Today At 11am!';
    }else if (h >= 20){
      msg = 'Closed: Open Again Tuesday At 3pm!';
    }else {
      msg = 'Open Until 8pm Tonight!';
    }
  }

  //Monday
  if(d.getDay() === 1){
    msg = 'Closed: Open Again Tuesday At 3pm!';
  }

  //Tuesday - Thursday 
  if(d.getDay() >= 2 && d.getDay() <= 4){
    if(h < 15){
      msg = 'Closed: Opening Today At 3pm!';
    }else if (h >= 22){
      msg = 'Closed: Open Again Tomorrow At 3pm!';
    }else {
      msg = 'Open Until 10pm Tonight!';
    }
  }

  //Friday
  if(d.getDay() === 5){
    if(h < 15){
      msg = 'Closed: Opening Today At 3pm!';
    }else if (h >= 24){
      msg = 'Closed: Open Again Tomorrow At 11am!';
    }else {
      msg = 'Open Until Midnight Tonight!';
    }
  }

  //Saturday
  if(d.getDay() === 6){
    if(h < 11){
      msg = 'Closed: Opening Today At 11am!';
    }else if (h >= 24){
      msg = 'Closed: Open Again Tomorrow At 11am!';
    }else {
      msg = 'Open Until Midnight Tonight!';
    }
  }

  return msg;
};
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var $slides_btn = $this.find('.slideBtn .slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    var hello;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides_btn, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });


$('.testimonial').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  var hello;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    // bulletArray[currentIndex].removeClass('active');
    // bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  advance();
});

//Image Gallery
$(".imgGallery img").on("click", function () {
  let modal = $("#popImg");
  let img = $(this);
  let modalImg = $("#img01");
  let imgCaption = $("#caption");

  $(modal).css("display", "block");
  $(modalImg).attr("src", this.src);
  $(imgCaption).html(this.alt);
});

$("#popImg span").on("click", function () {
    let modal = $("#popImg");
    $(modal).css("display", "none");
});

$(".sectionCards .col-sm-2").on("click", function(){
  let $icon = $(this).find("i").attr("id");
  
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(`#${$icon}-div`).removeClass("hide");            
  $(`#${$icon}-div`).siblings().addClass("hide");
});

$(".sectionCards .col-sm-6").on("click", function(){
  let $icon = $(this).find("i").attr("id");
  
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(`#${$icon}-div`).removeClass("hide");            
  $(`#${$icon}-div`).siblings().addClass("hide");
  $(".partyForm").addClass("hide");
  $(".jrabtn").addClass("hide");
  $(".jrbbtn").addClass("hide");
  $(".adultabtn").addClass("hide");
  $(".adultbbtn").addClass("hide");
  $(".packageBlock").removeClass("hide");
});