// Check off specific tasks by clicking 

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete list item when 'X' is clicked
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new todo item to the list
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$('ul').append("<li> <span> <i class='fa fa-trash' aria-hidden='true'></i> </span> " + newTodo + "</li>");
	};
});

