let listaAmigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();
    
    if (document.getElementById("amigo").value == ""){
        alert ("Digite um nome!")
    }
    else if(listaAmigos.includes(amigo)){
        alert("Este nome já esta na lista!");
    }
    else{
        listaAmigos.push(`${amigo}`);
        amigo = document.getElementById("amigo");
        amigo.value = "";   
        let campo = document.getElementById("listaAmigos");
        campo.innerHTML = listaAmigos.join('<br>'); 
    } 
}

function sortearAmigo(){
    if (listaAmigos.length <= 1){
        alert ("Digite pelo menos dois nomes para realizar o sorteio !!")

    }
    else{
        console.log(listaAmigos);
        let sorteado = Math.floor(Math.random() * listaAmigos.length);
        console.log(sorteado);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = (listaAmigos[sorteado]); 
    }
}

