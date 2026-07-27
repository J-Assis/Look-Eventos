/* =====================================================
   RANKING DE USUARIO
===================================================== */

const rankingGrid =
    document.getElementById(
        "rankingGrid"
    );


/* =====================================================
   GERAR RANKING
===================================================== */

function gerarRanking() {

    if (!rankingGrid) return;


    rankingGrid.innerHTML = "";


    const usuarios_ordenados =

        [...usuarios].sort(

            (

                usuario_a,

                usuario_b

            ) =>

                usuario_b

                    .valor_total_arrecadado

                -

                usuario_a

                    .valor_total_arrecadado

        );


    usuarios_ordenados.forEach(

        (

            usuario,

            indice

        ) => {


            const ranking_card =

                document.createElement(

                    "div"

                );


            ranking_card.classList.add(

                "ranking-card",

                "fade-up"

            );


            ranking_card.innerHTML = `

                <span class="posicao">

                    #${indice + 1}

                </span>


                <div class="aluno-info">

                    <div>

                        <h3>

                            ${usuario.nome}

                        </h3>


                        <p>

                            ${usuario.perfil}

                        </p>

                    </div>

                </div>


                <div class="progress">

                    <div

                        class="progress-bar"

                        style="width: ${

                            calcularPercentual(

                                usuario

                            )

                        }%"

                    >

                    </div>

                </div>


                <div class="arrecadado">

                    R$

                    ${

                        usuario

                            .valor_total_arrecadado

                            .toLocaleString(

                                "pt-BR"

                            )

                    }

                </div>

            `;


            rankingGrid.appendChild(

                ranking_card

            );

        }

    );

}


/* =====================================================
   PERCENTUAL DO RANKING
===================================================== */

function calcularPercentual(

    usuario

) {


    if (

        usuarios.length === 0

    ) {

        return 0;

    }


    const maior_valor =

        Math.max(

            ...

            usuarios.map(

                usuario =>

                    usuario

                        .valor_total_arrecadado

            )

        );


    if (

        maior_valor === 0

    ) {

        return 0;

    }


    return (

        usuario

            .valor_total_arrecadado

        /

        maior_valor

    )

    *

    100;

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(

    "DOMContentLoaded",

    gerarRanking

);
