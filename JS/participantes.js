/* =====================================================
   PARTICIPANTES
===================================================== */

let participantes = [];


function criarParticipante(

    nome,

    cpf,

    telefone,

    email

) {

    const participante = {

        id_participante:
            null,

        nome:
            nome,

        cpf:
            cpf,

        telefone:
            telefone,

        email:
            email

    };


    participantes.push(

        participante

    );


    return participante;

}
