$(window).on('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var projectHeight = $('.project-page-content').height();
  var totalPrHeight = (projectHeight - 1);

  if(scrollPosition > totalPrHeight) {
      $('.project-description-container').addClass('visible');
  }

  if(scrollPosition < totalPrHeight) {
      $('.project-description-container').removeClass('visible');
  }
});
