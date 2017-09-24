$(window).on('scroll', function() {
  var projectScrollPosition = window.pageYOffset;
  // var viewHeight = ($(window).height()*0.33333);
  // var projectHeight = $('.project-page-content').height() - viewHeight;
  // var totalPrHeight = (projectHeight - 1);

  var projectHeight = $('.project-page-content').height() - 200;

  if(projectScrollPosition >= projectHeight) {
      $('body').addClass('dark-bg');
      $('.project-description-container').addClass('visible');
      $('.back-home-link').addClass('white');
  }

  if(projectScrollPosition < projectHeight) {
      $('body').removeClass('dark-bg');
      $('.project-description-container').removeClass('visible');
      $('.back-home-link').removeClass('white');
  }

  if(projectScrollPosition > 500){
      $('.video-container').addClass('hidden');
      $('.project-header-video').removeClass('white');
  }

  if(projectScrollPosition <= 500) {
      $('.video-container').removeClass('hidden');
      $('.project-header-video').addClass('white');
  }
});

$(document).ready(function(){

    $('.project-image').each(function(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var rollDice = getRandomInt(-20, 20)

        $(this).css('transform', 'rotate(' + rollDice + 'deg)');
    });

    $('.buy-link').each(function(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var rollDice = getRandomInt(-30, 30)

        $(this).css('transform', 'rotate(' + rollDice + 'deg)');
    });

    var projectScrollPosition = window.pageYOffset;
    var viewHeight = ($(window).height()*0.33333);
    var projectHeight = $('.project-page-content').height() - viewHeight;
    var totalPrHeight = (projectHeight - 1);

    if(projectScrollPosition > totalPrHeight) {
        $('.project-description-container').addClass('visible');
        $('.back-home-link').addClass('white');
    }

    if(projectScrollPosition < totalPrHeight) {
        $('.project-description-container').removeClass('visible');
        $('.back-home-link').removeClass('white');
    }

    if(projectScrollPosition > 500){
        $('.video-container').addClass('hidden');
        $('.project-header-video').removeClass('white');
    }

    if(projectScrollPosition <= 500) {
        $('.video-container').removeClass('hidden');
        $('.project-header-video').addClass('white');
    }

});
