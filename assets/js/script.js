// Check off specific tasks by clicking 

$("li").on("click", function(){
	$(this).toggleClass("completed");
});

// Delete list item when 'X' is clicked
$('span').on("click", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$('ul').append("<li> <span> X </span> " + newTodo + "</li>");
	};
});