$(document).ready(function() {
  $('.button').on('click', function() {
    $('.content').toggleClass('isOpen');
    $('.button').toggleClass('isOpen');
  });
});