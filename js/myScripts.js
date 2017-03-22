$(document).ready(function(){

  $('body').scrollspy({target: ".navbar", offset: 50});

  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    $('body').animate({'scrollTop': target.offset().top}, 300, 'swing');
  });

});
