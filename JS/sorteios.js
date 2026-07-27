/* =====================================================
   SORTEIOS
===================================================== */

let sorteios = [];


function criarSorteio(

    data_sorteio,

    numero_sorteado

) {

    const sorteio = {

        id_sorteio:
            null,

        data_sorteio:
            data_sorteio,

        numero_sorteado:
            numero_sorteado,

        status_retirada_premio:
            "pendente"

    };


    sorteios.push(

        sorteio

    );


    return sorteio;

}
