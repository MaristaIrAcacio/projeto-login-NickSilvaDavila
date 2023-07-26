function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
    }
}
// CRIA LISTA DE USUARIO DENTRO DE UM  ARRAY

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById("nomeUser").value = '';}else{
            alert("Usuario, por favor preencher o campo")
        }
        console.log(dadosLista);
    }


// FUNÇAO PARA CRIAÇAO DE LISTA NA TABELA


function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuario</th>"
}
    

    // LAÇO  DE REPETIÇAO  PARA COLOCAR NOMES NA TABELA
    for(let i=0;i <= (dadosLista.length-1);i++){

    }
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'"

{
    // FUNÇAO PARA EDITAR NOME
    function Editar(i){
        document.getElementById("nomeUser").value = dadosLista[(i - 1)];
        dadosLista.splice(dadosLista[(i - 1)], 1)
    }
}
// FUNÇAO PARA EXCLUIR NOME
function excluir(i){
    dadosLista.splice([i - 1], 1);
    document.getElementById('tabela').deleteRow(i);
}