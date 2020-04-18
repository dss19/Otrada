$(document).ready(function() {

  // Main slider

  $('.main__news-slider').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: '<div class="next">'+
    '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.414 7.75725C12.8045 7.36672 13.4377 7.36672 13.8282 7.75725L19.4851 13.4141C19.8756 13.8046 19.8756 14.4378 19.4851 14.8283L13.8282 20.4852C13.4377 20.8757 12.8045 20.8757 12.414 20.4852C12.0235 20.0946 12.0235 19.4615 12.414 19.071L17.3637 14.1212L12.414 9.17146C12.0235 8.78094 12.0235 8.14777 12.414 7.75725Z" fill="white"/>'+
    '<circle opacity="0.5" cx="14" cy="14" r="13" stroke="white" stroke-width="2"/>'+
    '</svg>'+
    '</div>'
  })
}) 

