$(document).ready(function() {
	let inicio = $('#header').offset().top;
	let servicios = $('#servicios').offset().top;
	let precios = $('#precios').offset().top;
	let contacto = $('#contacto').offset().top;

	$('#btn-incio').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio
		}, 700)
	})

	$('#btn-servicios').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios
		}, 700)
	})

	$('#btn-precios').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: precios
		}, 700)
	})

	$('#btn-contacto').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		}, 700)
	})

	$('#btn2-servicios').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios
		}, 700)
	})

	$('#btn2-precios').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: precios
		}, 700)
	})
});