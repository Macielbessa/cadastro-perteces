var botaoAdicionar = document.querySelector("#buscar-pertences");

botaoAdicionar.addEventListener("click", function() {

	var xhr = new XMLHttpRequest();
	//xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    	if ( xhr.status == 200) {
    	  erroAjax.classList.add("invisivel");
    	  var resposta = xhr.responseText;
    	  var pertences = JSON.parse(resposta);
         
          pertences.forEach( function(pertence) {
    	  adicionaPertenceNaTabela(pertence);

          })
    	}
    	else {
    		erroAjax.classList.remove("invisivel");
    	}

    })
	xhr.send();
})