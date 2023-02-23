// Função enviar
let senha;

function envio(){
senha=document.getElementById("senha").value;
document.getElementById("senha").value="";

if(senha == "Tata"|| senha == "Bruno" || senha == "tata" || senha == "bruno" || senha == "Catharine" || senha == "catharine" || senha == "bruninho" || senha == "bubu"){
    alert("Parabéns! Você solucionou o enigma");
    location.reload();
}
else if(senha == "1702"){
    alert("Boa Tentativa! kkkkk \nMas essa não é a senha");
    alert("Já tentou a banana?")
}
else{
    alert("Senha errada! Tente novamente");
}
}

// função banana
let cont = 0;

function banana(){
cont++

if(cont<10){
    alert("Banana");
}
else if(cont >= 10 && cont <= 14){
    alert("Bananaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
}
else{
    alert("A senha é o Amor da sua vida");
}
}