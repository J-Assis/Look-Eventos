/* =====================================================
   NUMEROS_RIFAS
===================================================== */

let numeros_rifas = [];


/* =====================================================
   VARIÁVEIS DA CAMPANHA
===================================================== */

let paginaAtual = 1;

const NUMEROS_POR_PAGINA = 1000;

let numeros_selecionados = [];


/* =====================================================
   ELEMENTOS DO HTML
===================================================== */

const gradeNumeros =
    document.getElementById(
        "gradeNumeros"
    );

const listaSelecionados =
    document.getElementById(
        "listaSelecionados"
    );

const qtdSelecionado =
    document.getElementById(
        "qtdSelecionado"
    );

const qtdDisponivel =
    document.getElementById(
        "qtdDisponivel"
    );

const qtdVendido =
    document.getElementById(
        "qtdVendido"
    );

const valorTotal =
    document.getElementById(
        "valorTotal"
    );

const paginaAtualElemento =
    document.getElementById(
        "paginaAtual"
    );

const anterior =
    document.getElementById(
        "anterior"
    );

const proximo =
    document.getElementById(
        "proximo"
    );

const buscarNumero =
    document.getElementById(
        "buscarNumero"
    );

const btnBuscar =
    document.getElementById(
        "btnBuscar"
    );

const surpresinha =
    document.getElementById(
        "surpresinha"
    );

const limpar =
    document.getElementById(
        "limpar"
    );

const comprar =
    document.getElementById(
        "comprar"
    );


/* =====================================================
   CRIAR NUMEROS_RIFAS
===================================================== */

function carregarNumerosRifas() {

    numeros_rifas = [];

    for (

        let numero = 1;

        numero <=
        campanhia_rifas.quantidade_numeros;

        numero++

    ) {

        numeros_rifas.push({

            numero:
                numero,

            status:
                "disponivel"

        });

    }

}


/* =====================================================
   GERAR NÚMEROS
===================================================== */

function gerarNumerosRifas() {

    if (!gradeNumeros) return;

    gradeNumeros.innerHTML = "";

    const inicio =

        (paginaAtual - 1)

        *

        NUMEROS_POR_PAGINA;


    const fim = Math.min(

        inicio +

        NUMEROS_POR_PAGINA,

        numeros_rifas.length

    );


    const numeros_da_pagina =

        numeros_rifas.slice(

            inicio,

            fim

        );


    numeros_da_pagina.forEach(

        numero_rifa => {

            const elemento =

                document.createElement(
                    "div"
                );


            elemento.classList.add(
                "numero"
            );


            elemento.dataset.numero =

                numero_rifa.numero;


            elemento.textContent =

                numero_rifa.numero

                    .toString()

                    .padStart(
                        5,
                        "0"
                    );


            elemento.classList.add(

                numero_rifa.status

            );


            if (

                numero_rifa.status ===

                "disponivel"

            ) {

                elemento.addEventListener(

                    "click",

                    selecionarNumero

                );

            }


            if (

                numeros_selecionados

                    .includes(

                        numero_rifa.numero

                    )

            ) {

                elemento.classList.add(

                    "selecionado"

                );

            }


            gradeNumeros.appendChild(

                elemento

            );

        }

    );


    atualizarPaginacao();

}


/* =====================================================
   PAGINAÇÃO
===================================================== */

function atualizarPaginacao() {

    if (!paginaAtualElemento) return;

    const inicio =

        ((paginaAtual - 1)

            *

            NUMEROS_POR_PAGINA)

        +

        1;


    const fim = Math.min(

        paginaAtual

        *

        NUMEROS_POR_PAGINA,

        numeros_rifas.length

    );


    paginaAtualElemento.textContent =

        `${inicio} - ${fim}`;

}


if (proximo) {

    proximo.addEventListener(

        "click",

        () => {

            const totalPaginas =

                Math.ceil(

                    numeros_rifas.length

                    /

                    NUMEROS_POR_PAGINA

                );


            if (

                paginaAtual <

                totalPaginas

            ) {

                paginaAtual++;

                gerarNumerosRifas();

            }

        }

    );

}


if (anterior) {

    anterior.addEventListener(

        "click",

        () => {

            if (paginaAtual > 1) {

                paginaAtual--;

                gerarNumerosRifas();

            }

        }

    );

}


/* =====================================================
   SELECIONAR NUMERO
===================================================== */

function selecionarNumero() {

    const numero = Number(

        this.dataset.numero

    );


    const numero_rifa =

        numeros_rifas.find(

            item =>

                item.numero ===

                numero

        );


    if (!numero_rifa) return;


    if (

        numero_rifa.status !==

        "disponivel"

    ) return;


    if (

        numeros_selecionados

            .includes(numero)

    ) {

        numeros_selecionados =

            numeros_selecionados.filter(

                item =>

                    item !== numero

            );


        this.classList.remove(

            "selecionado"

        );

    } else {

        numeros_selecionados.push(

            numero

        );


        this.classList.add(

            "selecionado"

        );

    }


    atualizarCarrinho();

}


/* =====================================================
   CARRINHO
===================================================== */

function atualizarCarrinho() {

    if (listaSelecionados) {

        if (

            numeros_selecionados.length === 0

        ) {

            listaSelecionados.textContent =

                "Nenhum";

        } else {

            listaSelecionados.textContent =

                numeros_selecionados

                    .sort(

                        (a, b) => a - b

                    )

                    .map(

                        numero =>

                            numero

                                .toString()

                                .padStart(

                                    5,

                                    "0"

                                )

                    )

                    .join(", ");

        }

    }


    if (qtdSelecionado) {

        qtdSelecionado.textContent =

            numeros_selecionados.length;

    }


    if (valorTotal) {

        valorTotal.textContent =

            (

                numeros_selecionados.length

                *

                campanhia_rifas

                    .preco_por_numero

            )

                .toLocaleString(

                    "pt-BR",

                    {

                        style: "currency",

                        currency: "BRL"

                    }

                );

    }

}


/* =====================================================
   SELEÇÃO ALEATÓRIA
===================================================== */

function selecionarAleatorios(

    quantidade

) {

    const disponiveis =

        numeros_rifas.filter(

            numero_rifa =>

                numero_rifa.status ===

                "disponivel"

                &&

                !numeros_selecionados

                    .includes(

                        numero_rifa.numero

                    )

        );


    for (

        let i = 0;

        i < quantidade;

        i++

    ) {

        if (

            disponiveis.length === 0

        ) return;


        const indice =

            Math.floor(

                Math.random()

                *

                disponiveis.length

            );


        const numero_rifa =

            disponiveis[indice];


        numeros_selecionados.push(

            numero_rifa.numero

        );


        disponiveis.splice(

            indice,

            1

        );

    }


    gerarNumerosRifas();

    atualizarCarrinho();

}


document

    .querySelectorAll(

        ".quick"

    )

    .forEach(

        botao => {

            botao.addEventListener(

                "click",

                () => {

                    selecionarAleatorios(

                        Number(

                            botao.dataset.qtd

                        )

                    );

                }

            );

        }

    );


/* =====================================================
   SURPRESINHA
===================================================== */

if (surpresinha) {

    surpresinha.addEventListener(

        "click",

        () => {

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


/* =====================================================
   LIMPAR
===================================================== */

if (limpar) {

    limpar.addEventListener(

        "click",

        () => {

            numeros_selecionados = [];

            gerarNumerosRifas();

            atualizarCarrinho();

        }

    );

}


/* =====================================================
   BUSCAR NUMERO
===================================================== */

if (btnBuscar) {

    btnBuscar.addEventListener(

        "click",

        () => {

            const numero = Number(

                buscarNumero.value

            );


            if (

                numero < 1

                ||

                numero >

                numeros_rifas.length

            ) {

                alert(

                    "Número inválido."

                );

                return;

            }


            paginaAtual =

                Math.ceil(

                    numero

                    /

                    NUMEROS_POR_PAGINA

                );


            gerarNumerosRifas();


            setTimeout(

                () => {

                    const elemento =

                        document.querySelector(

                            `[data-numero="${numero}"]`

                        );


                    if (elemento) {

                        elemento.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "center"

                        });

                    }

                },

                100

            );

        }

    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        carregarNumerosRifas();

        gerarNumerosRifas();

        atualizarCarrinho();

    }

);
