// CONTADOR

const dataSorteio = new Date("July 28, 2026 20:00:00").getTime();

setInterval(() => {

const agora = new Date().getTime();

const distancia = dataSorteio - agora;

const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(distancia % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutos = Math.floor(
(distancia % (1000 * 60 * 60))
/
(1000 * 60)
);

const segundos = Math.floor(
(distancia % (1000 * 60))
/
1000
);

document.getElementById("dias").innerText = dias;
document.getElementById("horas").innerText = horas;
document.getElementById("minutos").innerText = minutos;
document.getElementById("segundos").innerText = segundos;

},1000);

// GERAÇÃO DOS NÚMEROS

const grid = document.getElementById("numeros-grid");

const listaNumeros = document.getElementById("listaNumeros");

const total = document.getElementById("total");

let selecionados = [];

const valorNumero = 2;

for(let i=0;i<1000;i++){

let numero = document.createElement("div");

numero.classList.add("numero");

numero.innerText = i.toString().padStart(3,"0");

// Simulação de números vendidos

if(i % 17 === 0){

numero.classList.add("vendido");

}

// Simulação reservados

if(i % 31 === 0 && !numero.classList.contains("vendido")){

numero.classList.add("reservado");

}

numero.addEventListener("click",()=>{

if(
numero.classList.contains("vendido") ||
numero.classList.contains("reservado")
){
return;
}

numero.classList.toggle("selecionado");

const valor = numero.innerText;

if(selecionados.includes(valor)){

selecionados = selecionados.filter(
n => n !== valor
);

}else{

selecionados.push(valor);

}

atualizarCarrinho();

});

grid.appendChild(numero);

}

function atualizarCarrinho(){

listaNumeros.innerHTML = "";

selecionados.forEach(numero=>{

let item = document.createElement("p");

item.innerText = numero;

listaNumeros.appendChild(item);

});

total.innerText =
(selecionados.length * valorNumero)
.toFixed(2)
.replace(".",",");

}

// PIX

document
.getElementById("gerarPix")
.addEventListener("click",()=>{

if(selecionados.length === 0){

alert("Selecione pelo menos um número.");

return;

}

alert(
`PIX gerado para ${selecionados.length} números.\nTotal R$ ${
selecionados.length * valorNumero
}`
);

});

// BUSCA FORMANDOS

const busca = document.querySelector(".buscar-formando");

busca.addEventListener("keyup",()=>{

let termo = busca.value.toLowerCase();

document
.querySelectorAll(".formando-card")
.forEach(card=>{

const nome = card
.querySelector("h3")
.innerText
.toLowerCase();

card.style.display =
nome.includes(termo)
? "block"
: "none";

});

});
