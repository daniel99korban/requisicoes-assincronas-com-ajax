// teste usando jason com AJAX
function carregarDados(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status == 200){
            document.getElementById("dados").innerHTML = formatarDados(xhr.responseText);
        }
    }
    xhr.open("GET", "jason-teste.json", true);
    xhr.send();
}

function formatarDados(str){
    var objDdado = JSON.parse(str);
    var valores = '';
    for (const d of objDdado['listaDePessoas']) {
        valores +=  '<h1>Nome: ' + d['nome'] +' </h1><h1>Idade: ' + d['idade'] + '</h1>';
    }
    return valores;
}