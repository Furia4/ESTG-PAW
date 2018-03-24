function disableBtn() {
    document.getElementById("mybtn").disabled = true;
}

function undisableBtn() {
    document.getElementById("mybtn").disabled = false;
}

function valida_form(){
	if(document.getElementById("email").value.length == 0){
		alert('Por favor, preencha todos o email corretamente');
		document.getElementById("email").focus();
		disableBtn();
		return false;
	}else{	
		alert('enviado');
		undisableBtn();
	}
	
}

