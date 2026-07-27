/* =====================================================
   PAGAMENTOS
===================================================== */

let pagamentos = [];


function criarPagamento(

    chave_pix_copia_e_cola,

    qr_code_url

) {

    const pagamento = {

        id_pagamento:
            null,

        chave_pix_copia_e_cola:
            chave_pix_copia_e_cola,

        qr_code_url:
            qr_code_url,

        data_geracao:
            new Date(),

        data_confirmacao:
            null,

        status_transacao:
            "pendente"

    };


    pagamentos.push(

        pagamento

    );


    return pagamento;

}
