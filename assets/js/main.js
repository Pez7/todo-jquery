$(document).ready(function(){
	$(".btn").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		if (tarea == ""){
			alert("Ingresa una tarea");
		}else{
			$("#to-do").append("<a href='#!' class='collection-item enlace'>"+ tarea + "</a>");
			$("#tarea").val("");
		}
	})

	$("#to-do").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		$(this).remove();
		$("#com-lista").append("<a href='#!' class='collection-item enlace'>"+ tarea + "</a>");
	})
});