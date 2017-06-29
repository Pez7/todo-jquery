$(document).ready(function(){
	$(".btn").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		if (tarea == ""){
			alert("Ingresa una tarea");
		}else{
			$("#to-do").append("<li><a href='#!' class='collection-item remove'>"+ tarea + "</a></li>");
			$("#tarea").val("");
		}
	})
	$(document).on('click', '.remove', function(){
		var rem = $(this).parent().remove();
		$("#done").append(rem);
	});
});


/*

$("#to-do").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		$(".enlace").remove();
	})*/