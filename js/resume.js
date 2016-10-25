$(document).ready(function() {
  $('.c-fancy-link').hover(
    function() {
      $(this).find('.icon-link').toggleClass('arrow');
    });
});