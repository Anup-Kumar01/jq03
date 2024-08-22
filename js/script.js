/*=========JQ=========*/
$(document).ready(function(){
	alert("Hello");

	// example 01
	$('#button').on('click',function(){
		alert("Hello");
	});

	// example 02
	$('#btn02').on('click',function(){
		$("#stext").show();
	});
	$('#btn03').on('click',function(){
		$("#stext").hide();
	});

	// example 03
	$('#btn04').on('click',function(){
		$("#stext01").show();
	});
	$('#btn05').on('click',function(){
		$("#stext01").hide();
	});
	$('#btn06').on('click',function(){
		$("#stext01").toggle();
	});

	// example 04
	$('p').on('click',function(){
		$(this).hide();
	});

	// example 05
	$('#btnin').on('click',function(){
		$("#ftext").show();
	});
	$('#btnout').on('click',function(){
		$("#ftext").hide();
	});
	$('#btnft').on('click',function(){
		$("#ftext").toggle();
	});

});


