$(document).ready(function(){

	$(".clickableItem").on("click", function(e){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

});

function flattenSelectedArray(myarray){
	var newarray = [];
	
	var result = flatten(myarray, newarray);
	console.log(result);
	$("#output p").html(result);
}