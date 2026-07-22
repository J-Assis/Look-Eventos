/* =====================================
   CONFIGURAÇÕES
===================================== */

const VALOR_BILHETE = 10;

const TOTAL_NUMEROS = 10000;

const NUMEROS_POR_PAGINA = 1000;

let paginaAtual = 1;

/* =====================================
   ELEMENTOS
===================================== */

const numerosGrid =
document.getElementById("numerosGrid");

const listaNumeros =
document.getElementById("listaNumeros");

const quantidadeBilhetes =
document.getElementById("quantidadeBilhetes");

const valorTotal =
document.getElementById("valorTotal");

const paginaAtualSpan =
document.getElementById("paginaAtual");

/* =====================================
   ESTADO
===================================== */

let numerosSelecionados = [];

/* =====================================
   DADOS DE EXEMPLO
   (depois virão do backend)
===================================== */

const vendidos = [

5,8,12,14,25,30,45,50,
77,88,99,100,120,150,
222,333,444,555,666,
777,888,999,

1200,1500,1750,
2000,2222,2500,
3000,3333,4000,
5000,5555,7000,
7777,8888,9999

];

const reservados = [

15,16,17,18,19,

70,71,72,73,

201,202,203,

1001,1002,1003,

2200,2201,

4500,4501,

8200,8201

];

/* =====================================
   PAGINAÇÃO
===================================== */

function atualizarPaginacao(){

    if(!paginaAtualSpan) return;

    const inicio =

    ((paginaAtual - 1)
    * NUMEROS_POR_PAGINA) + 1;

    const fim =

    Math.min(

        paginaAtual *
        NUMEROS_POR_PAGINA,

        TOTAL_NUMEROS

    );

    paginaAtualSpan.textContent =

    `Página ${paginaAtual}
    (${inicio} - ${fim})`;

}

/* =====================================
   GERAR BILHETES
===================================== */

function gerarBilhetes(){

    if(!numerosGrid) return;

    numerosGrid.innerHTML = "";

    const inicio =

    ((paginaAtual - 1)
    * NUMEROS_POR_PAGINA) + 1;

    const fim =

    Math.min(

        inicio +
        NUMEROS_POR_PAGINA - 1,

        TOTAL_NUMEROS

    );

    for(

        let i = inicio;

        i <= fim;

        i++

    ){

        const numero =
        document.createElement("div");

        numero.classList.add(
            "numero"
        );

        numero.dataset.numero = i;

        numero.textContent =

        i.toString()
        .padStart(5,"0");

        /* vendido */

        if(
            vendidos.includes(i)
        ){

            numero.classList.add(
                "vendido"
            );

        }

        /* reservado */

        else if(
            reservados.includes(i)
        ){

            numero.classList.add(
                "reservado"
            );

        }

        /* disponível */

        else{

            numero.addEventListener(
                "click",
                selecionarNumero
            );

        }

        /* manter seleção ao trocar página */

        if(

            numerosSelecionados.includes(i)

        ){

            numero.classList.add(
                "selecionado"
            );

        }

        numerosGrid.appendChild(
            numero
        );

    }

    atualizarPaginacao();

}

/* =====================================
   PRÓXIMA PÁGINA
===================================== */

const proximaPagina =

document.getElementById(
"proximaPagina"
);

if(proximaPagina){

    proximaPagina.addEventListener(
        "click",
        ()=>{

            const totalPaginas =

            Math.ceil(

                TOTAL_NUMEROS /

                NUMEROS_POR_PAGINA

            );

            if(

                paginaAtual <
                totalPaginas

            ){

                paginaAtual++;

                gerarBilhetes();

                window.scrollTo({

                    top:
                    numerosGrid.offsetTop - 120,

                    behavior:"smooth"

                });

            }

        }
    );

}

/* =====================================
   PÁGINA ANTERIOR
===================================== */

const paginaAnterior =

document.getElementById(
"paginaAnterior"
);

if(paginaAnterior){

    paginaAnterior.addEventListener(
        "click",
        ()=>{

            if(
                paginaAtual > 1
            ){

                paginaAtual--;

                gerarBilhetes();

                window.scrollTo({

                    top:
                    numerosGrid.offsetTop - 120,

                    behavior:"smooth"

                });

            }

        }
    );

}
/* =====================================
   SELECIONAR NÚMERO
===================================== */

function selecionarNumero(){

    const numero = Number(
        this.dataset.numero
    );

    if(

        numerosSelecionados.includes(
            numero
        )

    ){

        numerosSelecionados =
        numerosSelecionados.filter(

            n => n !== numero

        );

        this.classList.remove(
            "selecionado"
        );

    }

    else{

        numerosSelecionados.push(
            numero
        );

        this.classList.add(
            "selecionado"
        );

    }

    atualizarCarrinho();

}

/* =====================================
   CARRINHO
===================================== */

function atualizarCarrinho(){

    if(!listaNumeros) return;

    if(

        numerosSelecionados.length === 0

    ){

        listaNumeros.innerHTML = `

        <p class="vazio">
            Nenhum número selecionado
        </p>

        `;

    }

    else{

        listaNumeros.innerHTML = "";

        numerosSelecionados

        .sort((a,b)=>a-b)

        .forEach(numero => {

            listaNumeros.innerHTML += `

            <div class="numero-selecionado">

                <span>

                    ${numero
                    .toString()
                    .padStart(5,"0")}

                </span>

                <span
                    class="remover-numero"
                    onclick="removerNumero(${numero})">

                    ✕

                </span>

            </div>

            `;

        });

    }

    if(quantidadeBilhetes){

        quantidadeBilhetes.textContent =

        numerosSelecionados.length;

    }

    if(valorTotal){

        valorTotal.textContent =

        "R$ " +

        (

            numerosSelecionados.length *

            VALOR_BILHETE

        )

        .toLocaleString(

            "pt-BR",

            {

                minimumFractionDigits:2

            }

        );

    }

}

/* =====================================
   REMOVER NÚMERO
===================================== */

function removerNumero(numero){

    numerosSelecionados =

    numerosSelecionados.filter(

        n => n !== numero

    );

    document
    .querySelectorAll(".numero")
    .forEach(item => {

        if(

            Number(
                item.dataset.numero
            ) === numero

        ){

            item.classList.remove(
                "selecionado"
            );

        }

    });

    atualizarCarrinho();

}

window.removerNumero =
removerNumero;

/* =====================================
   BUSCAR NÚMERO
===================================== */

const btnBuscar =

document.getElementById(
"btnBuscar"
);

if(btnBuscar){

    btnBuscar.addEventListener(
        "click",
        buscarNumero
    );

}

function buscarNumero(){

    const numero = Number(

        document
        .getElementById(
            "buscarNumero"
        )
        .value

    );

    if(

        numero < 1 ||

        numero > TOTAL_NUMEROS

    ){

        alert(
            "Número inválido."
        );

        return;

    }

    paginaAtual =

    Math.ceil(

        numero /

        NUMEROS_POR_PAGINA

    );

    gerarBilhetes();

    setTimeout(()=>{

        const card =

        document.querySelector(

        `[data-numero='${numero}']`

        );

        if(card){

            card.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

            card.style.border =
            "3px solid #ffffff";

            setTimeout(()=>{

                card.style.border =
                "none";

            },3000);

        }

    },100);

}

/* =====================================
   SELEÇÃO ALEATÓRIA
===================================== */

function selecionarAleatorios(
    quantidade
){

    const disponiveis = [];

    document
    .querySelectorAll(".numero")
    .forEach(numero => {

        if(

            !numero.classList.contains(
                "vendido"
            )

            &&

            !numero.classList.contains(
                "reservado"
            )

            &&

            !numero.classList.contains(
                "selecionado"
            )

        ){

            disponiveis.push(numero);

        }

    });

    for(

        let i = 0;

        i < quantidade;

        i++

    ){

        if(

            disponiveis.length === 0

        ) return;

        const indice =

        Math.floor(

            Math.random()

            *

            disponiveis.length

        );

        const escolhido =

        disponiveis[indice];

        escolhido.click();

        disponiveis.splice(
            indice,
            1
        );

    }

}

/* =====================================
   BOTÕES ALEATÓRIOS
===================================== */

document
.querySelectorAll(
".btn-random"
)
.forEach(botao => {

    botao.addEventListener(
        "click",
        ()=>{

            selecionarAleatorios(

                Number(
                    botao.dataset.qtd
                )

            );

        }
    );

});

/* =====================================
   SURPRESINHA
===================================== */

const surpresinha =

document.getElementById(
"surpresinha"
);

if(surpresinha){

    surpresinha.addEventListener(
        "click",
        ()=>{

            const quantidade =

            Math.floor(

                Math.random() * 20

            ) + 1;

            selecionarAleatorios(
                quantidade
            );

        }
    );

}
/* =====================================
   FORMULÁRIO DE COMPRA
===================================== */

const formCompra =
document.getElementById(
    "formCompra"
);

if(formCompra){

    formCompra.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            if(
                numerosSelecionados.length === 0
            ){

                alert(
                    "Selecione pelo menos um bilhete."
                );

                return;

            }

            const nome =
            document.getElementById(
                "nome"
            )?.value;

            const email =
            document.getElementById(
                "email"
            )?.value;

            const telefone =
            document.getElementById(
                "telefone"
            )?.value;

            const cpf =
            document.getElementById(
                "cpf"
            )?.value;

            if(
                !nome ||
                !email ||
                !telefone ||
                !cpf
            ){

                alert(
                    "Preencha todos os campos."
                );

                return;

            }

            abrirModalPix();

        }
    );

}

/* =====================================
   MODAL PIX
===================================== */

const modalPix =
document.getElementById(
    "modalPix"
);

const fecharModal =
document.getElementById(
    "fecharModal"
);

function abrirModalPix(){

    if(modalPix){

        modalPix.classList.add(
            "ativo"
        );

    }

}

function fecharModalPix(){

    if(modalPix){

        modalPix.classList.remove(
            "ativo"
        );

    }

}

if(fecharModal){

    fecharModal.addEventListener(
        "click",
        fecharModalPix
    );

}

window.addEventListener(
    "click",
    function(e){

        if(
            e.target === modalPix
        ){

            fecharModalPix();

        }

    }
);

/* =====================================
   COPIAR PIX
===================================== */

const copiarPix =
document.getElementById(
    "copiarPix"
);

const codigoPix =
document.getElementById(
    "codigoPix"
);

if(copiarPix){

    copiarPix.addEventListener(
        "click",
        ()=>{

            codigoPix.select();

            codigoPix.setSelectionRange(
                0,
                99999
            );

            navigator.clipboard
            .writeText(
                codigoPix.value
            )
            .then(()=>{

                copiarPix.textContent =
                "✓ Código Copiado";

                setTimeout(()=>{

                    copiarPix.textContent =
                    "Copiar Código PIX";

                },2000);

            });

        }
    );

}

/* =====================================
   CONTADOR REGRESSIVO
===================================== */

const dataSorteio = new Date(
    "2026-12-20T20:00:00"
).getTime();

function atualizarContador(){

    const agora =
    new Date().getTime();

    const distancia =
    dataSorteio - agora;

    if(distancia <= 0){

        document.getElementById(
            "dias"
        ).textContent = "00";

        document.getElementById(
            "horas"
        ).textContent = "00";

        document.getElementById(
            "minutos"
        ).textContent = "00";

        document.getElementById(
            "segundos"
        ).textContent = "00";

        return;
    }

    const dias = Math.floor(

        distancia /

        (1000 * 60 * 60 * 24)

    );

    const horas = Math.floor(

        (

            distancia %

            (1000 * 60 * 60 * 24)

        )

        /

        (1000 * 60 * 60)

    );

    const minutos = Math.floor(

        (

            distancia %

            (1000 * 60 * 60)

        )

        /

        (1000 * 60)

    );

    const segundos = Math.floor(

        (

            distancia %

            (1000 * 60)

        )

        /

        1000

    );

    document.getElementById(
        "dias"
    ).textContent =
    String(dias).padStart(2,"0");

    document.getElementById(
        "horas"
    ).textContent =
    String(horas).padStart(2,"0");

    document.getElementById(
        "minutos"
    ).textContent =
    String(minutos).padStart(2,"0");

    document.getElementById(
        "segundos"
    ).textContent =
    String(segundos).padStart(2,"0");

}

setInterval(
    atualizarContador,
    1000
);

atualizarContador();

/* =====================================
   ANO AUTOMÁTICO
===================================== */

const anoAtual =
document.getElementById(
    "anoAtual"
);

if(anoAtual){

    anoAtual.textContent =
    new Date().getFullYear();

}

/* =====================================
   ESTATÍSTICAS DINÂMICAS
===================================== */

function atualizarEstatisticas(){

    const vendidosQtd =
    vendidos.length;

    const disponiveisQtd =

        TOTAL_NUMEROS

        -

        vendidos.length

        -

        reservados.length;

    console.log(
        "Vendidos:",
        vendidosQtd
    );

    console.log(
        "Disponíveis:",
        disponiveisQtd
    );

}

/* =====================================
   INICIALIZAÇÃO
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        gerarBilhetes();

        atualizarCarrinho();

        atualizarEstatisticas();

        console.log(
            "FormaRifa carregado com sucesso."
        );

    }
);

//Na versão profissional com backend, você não deve manter:

//const vendidos = [...]
//const reservados = [...]
//Esses dados devem vir da API, por exemplo:

//fetch('/api/bilhetes')
