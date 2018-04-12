function validapsw(pass){
	'use strict';
	var i=0;
	while(i != pass.length){
		i += pass.charCodeAt(i);
		i++;
	}
	return i;
}

function Valida(){
	'use strict';
	var nome=document.getElementById("Nome");
	var apelido=document.getElementById("Apelido");
/*	var email=document.getElementById("Email");
	var cd=document.getElementById("CodigoPostal");
	var nt=document.getElementById("NTelefone");
	var carta=document.getElementById("carta");
	var pas1=validapasw(document.getElementById("psw1"));
	var pas2=validapasw(document.getElementById("psw2"));
*/
	if(nome == false || apelido == false /*|| email == false || cd == false ||  == false || carta == 111111111 || pas1 >= 196 || pas2 >= 196*/){
		alert('É necessário preencher todos os campos com *');
		return true;
	}else{
		alert('Submetido');
		return false;
		
	}
}
function valida_form(){
	'use strict';
	document.getElementById("mybtn").disabled = true;
	
}
