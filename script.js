var main = function() {
	$('.cart').click(function() {
  	$('.cart .dropdown-menu').toggle();
  });
  $('.account').click(function() {
  	$('.account .dropdown-menu').toggle();
  });
  $('.help').click(function() {
  	$('.help .dropdown-menu').toggle();
  });
  
};

$(document).ready(main);