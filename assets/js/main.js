$(document).ready(function(){
	$(".boton").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		if (tarea == ""){
			alert("Ingresa una tarea");
		}else{
			$("#to-do").append("<li>"+
									"<a href='#'' class='lista'>"+tarea+
										"<a class='remove btn-flat'>"+
											"<i class='fa fa-check' aria-hidden='true'></i>"+
										"</a>"+
										"<a class='done btn-flat'>"+
											"<i class='fa fa-trash' aria-hidden='true'></i>"+
										"</a>"+
									"</a>"+
								"</li>");
			$("#tarea").val("");
		$(".done").click(function(){
			var rem = $(this).parent().remove();
		});
		$(".remove").click(function(){
			var rem = $(this).parent().remove();
			$("#done").append(rem);
		});
		}
	});
});



