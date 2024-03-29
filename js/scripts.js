$( document ).ready(function() {

  //animation stuff

  //for fade-in/out of page... removes the opacity: 0 class when pages loaded
  $('body').removeClass('fade-out');
  // initialize fade on scroll library
  AOS.init({
    duration: 1000,
  });

  //navbar stuff

  //make room for navbar at top
  $('body').offset({top:100, left: 0});

  //make dropdown open and close when hamburger
  $('.hamburger').click(function(event){
    $('.dropdown-links').toggle();
  });
  //make dropdown close when you click off it
  $('html').click(function() {
    $('.dropdown-links').hide();
  });
  $('.my-nav').click(function(event){
    event.stopPropagation();
  });

  //make page scroll to section when you click nav link
  $('.my-nav a, #nav-logo').click(function(event) {
    var id = $(this).attr("href");
    var offset = 60;
    var target = $(id).offset().top - 60;
    $('html, body').animate({
      scrollTop: target
    });
    $('.dropdown-links').hide();
  });

  //carousel stuff

  //initialize materialize carousel
 $('.carousel.carousel-slider').carousel({fullWidth: true});

 //make my previous and next chevrons on carousel Work
 $('.carousel-prev').click(function(event){
   $('.carousel').carousel('prev');
 });
 $('.carousel-next').click(function(event){
   $('.carousel').carousel('next');
 });

 //case study stuff

 //'top' arrow at bottom of case studies on desktop
  $('.to-top-desktop').click(function(event){
   $('.case-study-content').animate({
     scrollTop: 0
   }, 1000);
 });

 //'top' arrow at bottom of case studies on mobile/tablet
  $('.to-top-tablet-and-down').click(function(event){
    // alert('boo');
   $('html, body').animate({
     scrollTop: 0
   }, 1000);
 });

//mouse scroll icon fade-out when scrolled
$('.case-study-content').scroll(function() {
  // alert('i recognize you scrolling case-study-content');
  // console.log($('.case-study-content').scrollTop());
  if($('.case-study-content').scrollTop()>= 100){
    // alert('a thing!');
    $('.scroll-downs').animate({opacity: 0});
  }
});


});
