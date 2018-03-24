function valida_form(){
	
	document.getElementById("mybtn").disabled = true;
	
}

function valida_nome(name){
	
	var pos = name.indexOf(' ');

 	if(pos >= 0){
		alert('Nome aceite');
		document.getElementById("mybtn").disabled = false;
	}else{
		alert('Introduza o primeiro e ultimo nome');
		document.getElementById("mybtn").disabled = true;
	}
}

