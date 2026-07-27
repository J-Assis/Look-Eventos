/* =====================================================
   CAMPANHIA_RIFAS
===================================================== */

let campanhia_rifas = {

    titulo:
        "Rifa Oficial da Formatura 2026",

    descricao:
        "Compre números, escolha qual formando deseja apoiar e concorra a grandes prêmios.",

    preco_por_numero:
        10,

    quantidade_numeros:
        10000,

    data_inicio:
        null,

    data_fim:
        null,

    status:
        "ativa",

    id_sorteio:
        null

};


/* =====================================================
   ATUALIZAR INFORMAÇÕES DA CAMPANHA
===================================================== */

function atualizarCampanhiaRifas() {

    const titulo =
        document.querySelector(
            ".rifa-oficial h2"
        );

    if (titulo) {

        titulo.textContent =
            campanhia_rifas.titulo;

    }

    const descricao =
        document.querySelector(
            ".rifa-oficial .section-header p"
        );

    if (descricao) {

        descricao.textContent =
            campanhia_rifas.descricao;

    }

}


document.addEventListener(
    "DOMContentLoaded",
    atualizarCampanhiaRifas
);
