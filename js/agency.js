// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(res){
    if (res.ok) {
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #success').show();
    } else {
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').show();
    }
  }, 'json').fail(function(){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').show();
  });
  return false;
});

// Async news form
$('form[id=newsForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(res){
    if (res.ok) {
      $('form[id=newsForm] #error').hide();
      $('form[id=newsForm] #success').show();
    } else {
      $('form[id=newsForm] #success').hide();
      $('form[id=newsForm] #error').show();
    }
  }, 'json').fail(function(){
    $('form[id=newsForm] #success').hide();
    $('form[id=newsForm] #error').show();
  });
  return false;
});

// Async news form
$('form[id=preschoolContactModal]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(res){
    if (res.success) {
      $('form[id=preschoolContactModal] #error').hide();
      $('form[id=preschoolContactModal] #success').show();
    } else {
      $('form[id=preschoolContactModal] #success').hide();
      $('form[id=preschoolContactModal] #error').show();
    }
  }, 'json').fail(function(){
    $('form[id=preschoolContactModal] #success').hide();
    $('form[id=preschoolContactModal] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5' //, toggleDisabled'
});
