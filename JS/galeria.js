/* =====================================================
   midias_galeria
===================================================== */

let midias_galeria = [];


function criarMidia(

    tipo_midia,

    url_arquivo,

    legenda

) {

    const midia = {

        id_midia:
            null,

        tipo_midia:
            tipo_midia,

        url_arquivo:
            url_arquivo,

        legenda:
            legenda

    };


    midias_galeria.push(

        midia

    );


    return midia;

}
