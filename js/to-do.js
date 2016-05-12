/// Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//click on X to delete to-do
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(event.which === 13){
		var todoText = $(this).val();
		//create new li and add to ul
		$("input[type='text']").val("")
		$("ul").append("<li><span><i class='fa fa-trash'></span></i> " + todoText + "</li>")
	}
});

$(".fa-check").click(function(){
	$("input[type='text']").fadeToggle();
});