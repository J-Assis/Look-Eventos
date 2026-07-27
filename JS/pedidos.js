/* =====================================================
   VENDA_PEDIDOS
===================================================== */

let venda_pedidos = [];


function criarVendaPedido(

    valor_total,

    id_pagamento

) {

    const venda_pedido = {

        data_venda:
            new Date(),

        valor_total:
            valor_total,

        status_pagamento:
            "pendente",

        id_pagamento:
            id_pagamento

    };


    venda_pedidos.push(

        venda_pedido

    );


    return venda_pedido;

}
