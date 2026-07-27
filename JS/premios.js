/* =====================================================
   PREMIOS
===================================================== */

let premios = [];


function criarPremio(

    nome_premio,

    descricao,

    regulamento,

    prazo_retirada_dias,

    id_campanha

) {

    const premio = {

        nome_premio:
            nome_premio,

        descricao:
            descricao,

        regulamento:
            regulamento,

        prazo_retirada_dias:
            prazo_retirada_dias,

        id_campanha:
            id_campanha

    };


    premios.push(

        premio

    );


    return premio;

}
