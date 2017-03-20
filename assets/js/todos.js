//check off specific todos by clicking - using the 'on' to set the efect on ALL elements including new ones
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed"); 
});

//click on X to delete toDo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //this = span and LI fade out
		$(this).remove(); // this = LI remove
	});
	event.stopPropagation(); //stop the event 
});

//create new toDo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 === ENTER
	var toDoText = $(this).val(); //grabbing new to do text for input and create a new li 
	$(this).val(""); //clean the input afetr hit ENTER
	$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + toDoText + "</li>"); //selecting the ul and inside creating a new li with the var
	}
});

$(".fa-hand-spock-o").click(function() {
	$("input[type='text']").fadeToggle();
	});
		
