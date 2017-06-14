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