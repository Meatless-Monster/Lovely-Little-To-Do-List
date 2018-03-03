
$("input").on("keypress", function(event){
	if(event.which === 13){
		$("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("strike");
});


$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("#minimize").on("click", function(){
	$("input").fadeToggle(500);
});

// $("ul").click(function(){
// 	alert("")
// });

$("#tAll").on("click", function(){
	$("li").remove();
});

$("#cAll").on("click", function(){
	var li = $("li");
	var nCheck = 0;
	for (var i=0; i< li.length; i++){
		console.log(li[i].classList)	
		if (li[i].classList.contains("strike")){
			nCheck+=1;
		}
	}
	if (nCheck === 0 || nCheck === li.length){
		$("li").toggleClass("strike");
	}else{
		$("li").addClass("strike");
	}

});


