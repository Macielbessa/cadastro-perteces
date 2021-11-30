var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
	console.log(this.value);

	var pertences = document.querySelectorAll(".pertence");

	if ( this.value.length > 0 ) {
		for ( var i = 0; i < pertences.length; i++) {

			var pertence = pertences[i];
			var nomeTd = pertence.querySelector(".info-nome");
			var nome = nomeTd.textContent;
			var expressao = new RegExp(this.value, "i");

			if ( !expressao.test(nome)) {
				pertence.classList.add("invisivel");
			}
			else {
				pertence.classList.remove("invisivel");
			}
		}
	}
	else {
		for ( var i = 0; i < pertences.length; i++) {
			var pertence = pertences[i];
			pertence.classList.remove("invisivel");
		}
	}

})
