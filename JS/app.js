/* ==========================
   MENU MOBILE
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if(menu.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        }else{

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

/* ==========================
   FECHAR MENU AO CLICAR
========================== */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/* ==========================
   FAQ
========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ==========================
   CONTADORES ANIMADOS
========================== */

function animateCounter(id, target, prefix = "", suffix = "") {

    const element = document.getElementById(id);

    if(!element) return;

    let current = 0;

    const increment = target / 100;

    const interval = setInterval(() => {

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(interval);

        }

        element.textContent =
            prefix +
            Math.floor(current).toLocaleString("pt-BR") +
            suffix;

    }, 20);

}

window.addEventListener("load", () => {

    animateCounter(
        "arrecadado",
        1250000,
        "R$ "
    );

    animateCounter(
        "formandos",
        4850
    );

    animateCounter(
        "bilhetes",
        58000
    );

    animateCounter(
        "premiosQtd",
        35
    );

});

/* ==========================
   TOP FORMANDOS
========================== */

const ranking = [

{
    nome:"Julya Assis",
    curso:"ADS",
    faculdade:"IFBA",
    arrecadado:4850,
    percentual:97,
    foto:"assets/images/user.jpg"
},

{
    nome:"Pedro Henrique",
    curso:"Engenharia Civil",
    faculdade:"UFBA",
    arrecadado:4200,
    percentual:84,
    foto:"assets/images/user.jpg"
},

{
    nome:"Ana Clara",
    curso:"Direito",
    faculdade:"UNEB",
    arrecadado:3950,
    percentual:79,
    foto:"assets/images/user.jpg"
},

{
    nome:"Lucas Santos",
    curso:"Medicina",
    faculdade:"UESC",
    arrecadado:3500,
    percentual:70,
    foto:"assets/images/user.jpg"
},

{
    nome:"Maria Eduarda",
    curso:"Arquitetura",
    faculdade:"UFBA",
    arrecadado:3200,
    percentual:64,
    foto:"assets/images/user.jpg"
},

{
    nome:"João Victor",
    curso:"ADS",
    faculdade:"IFBA",
    arrecadado:3100,
    percentual:62,
    foto:"assets/images/user.jpg"
}

];

const rankingGrid =
document.getElementById("rankingGrid");

if(rankingGrid){

    ranking.forEach((aluno,index) => {

        rankingGrid.innerHTML += `

        <div class="ranking-card fade-up">

            <span class="posicao">

                #${index + 1}

            </span>

            <div class="aluno-info">

                <img
                src="${aluno.foto}"
                alt="${aluno.nome}">

                <div>

                    <h3>
                        ${aluno.nome}
                    </h3>

                    <p>
                        ${aluno.curso}
                        •
                        ${aluno.faculdade}
                    </p>

                </div>

            </div>

            <div class="progress">

                <div
                class="progress-bar"
                style="
                width:${aluno.percentual}%">
                </div>

            </div>

            <div class="arrecadado">

                R$
                ${aluno.arrecadado.toLocaleString("pt-BR")}

            </div>

        </div>

        `;

    });

}

/* ==========================
   SCROLL REVEAL
========================== */

const reveals =
document.querySelectorAll(".fade-up");

function revealOnScroll(){

    reveals.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        const visible = 100;

        if(top < window.innerHeight - visible){

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
   HEADER SCROLL
========================== */

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,17,23,.98)";

    }else{

        header.style.background =
        "rgba(15,17,23,.95)";

    }

});

/* ==========================
   BOTÃO COMPRAR
========================== */

document.querySelectorAll(
".btn-primary"
).forEach(btn => {

    btn.addEventListener("click", () => {

        const rifa =
        document.getElementById("rifa");

        if(rifa){

            rifa.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   DADOS DA RIFA
========================== */

const dadosRifa = {

    totalBilhetes:10000,

    vendidos:6800,

    disponiveis:3200,

    valorBilhete:10

};

console.table(dadosRifa);

/* ==========================
   ANO AUTOMÁTICO
========================== */

const footerYear =
document.getElementById("anoAtual");

if(footerYear){

    footerYear.textContent =
    new Date().getFullYear();

}

/* ==========================
   PREPARAÇÃO FUTURA
========================== */

// API Formandos
// API Bilhetes
// API PIX
// API Sorteios
// API Ranking

console.log(
"FormaRifa carregado com sucesso."
);
