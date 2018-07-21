//Check off specific todos by clicking.
$("ul").on("click","li",function() {
	$(this).toggleClass("completed");
});

//click on X to delete it
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//adding new todos to the list.
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todosText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todosText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});