'use strict';

let userHandler = function() {
  $('#about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#planning").offset().top
    }, 1000);
  });
  $('#nav-me').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#mike").offset().top
    }, 1000);
  });
};

$(document).ready(() => {
  userHandler();
});
