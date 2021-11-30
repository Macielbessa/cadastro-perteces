var botaoAdicionar = document.querySelector("#adicionar-pertences");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pertence = obtemPertenceDoFormulario(form);


    var erros = validaPertence(pertence);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPertenceNaTabela(pertence);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPertenceNaTabela (pertence) {
    var pertenceTr = montaTr(pertence);
    var tabela = document.querySelector("#tabela-pertences");
    tabela.appendChild(pertenceTr);

}

function obtemPertenceDoFormulario(form) {

    var pertence = {
        nome: form.nome.value,
        linhas: form.linhas.value,
        horario: form.horario.value,
    }

    return pertence;
}

function montaTr(pertence) {
    var pertenceTr = document.createElement("tr");
    pertenceTr.classList.add("pertence");

    pertenceTr.appendChild(montaTd(pertence.nome, "info-nome"));
    pertenceTr.appendChild(montaTd(pertence.linhas, "info-linhas"));
    pertenceTr.appendChild(montaTd(pertence.horario, "info-horario"));

    return pertenceTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPertence(pertence) {

    var erros = [];

    if (pertence.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (pertence.linhas.length == 0) {
        erros.push("a Linha não pode ser em branco");
    }

    if (pertence.horario.length == 0) {
        erros.push("o Horario não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
