$(window).on('scroll', function() {
  var projectScrollPosition = window.pageYOffset;
  var projectHeight = $('.project-page-content').height();
  var totalPrHeight = (projectHeight - 1);

  if(projectScrollPosition > totalPrHeight) {
      $('.project-description-container').addClass('visible');
      $('.back-home-link').addClass('white');
  }

  if(projectScrollPosition < totalPrHeight) {
      $('.project-description-container').removeClass('visible');
      $('.back-home-link').removeClass('white');
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
    var projectHeight = $('.project-page-content').height();
    var totalPrHeight = (projectHeight - 1);

    if(projectScrollPosition > totalPrHeight) {
        $('.project-description-container').addClass('visible');
        $('.back-home-link').addClass('white');
    }

    if(projectScrollPosition < totalPrHeight) {
        $('.project-description-container').removeClass('visible');
        $('.back-home-link').removeClass('white');
    }

});
