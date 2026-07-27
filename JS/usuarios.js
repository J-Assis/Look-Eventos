/* =====================================================
   USUARIO
===================================================== */

let usuarios = [];


function criarUsuario(

    nome,

    email,

    senha_hash,

    perfil,

    link_personalizado

) {

    const usuario = {

        nome:
            nome,

        email:
            email,

        senha_hash:
            senha_hash,

        perfil:
            perfil,

        link_personalizado:
            link_personalizado,

        valor_total_arrecadado:
            0,

        valor_abatido_formatura:
            0

    };


    usuarios.push(

        usuario

    );


    return usuario;

}
