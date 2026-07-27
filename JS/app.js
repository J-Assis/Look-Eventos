/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (menu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    });

}


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {

            menu.classList.remove("active");

        }

        const icon = menuToggle?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

});


/* =====================================================
   FAQ
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/* =====================================================
   CONTADORES ANIMADOS
===================================================== */

function animateCounter(
    id,
    target,
    prefix = "",
    suffix = ""
) {

    const element = document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment = target / 100;

    const interval = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(interval);

        }

        element.textContent =

            prefix +

            Math.floor(current)
                .toLocaleString("pt-BR") +

            suffix;

    }, 20);

}


/* =====================================================
   ESTATÍSTICAS TEMPORÁRIAS
=====================================================

   Posteriormente estes valores virão da API.

===================================================== */

window.addEventListener("load", () => {

    animateCounter(
        "formandos",
        4850
    );

    animateCounter(
        "bilhetes",
        6800
    );

    animateCounter(
        "premiosQtd",
        3
    );

});


/* =====================================================
   USUARIO - está no ranking.js
===================================================== */


/* =====================================================
   RANKING - está no ranking.js
===================================================== */



/* =====================================================
   SCROLL REVEAL
===================================================== */

function revealOnScroll() {

    const reveals =
        document.querySelectorAll(".fade-up");

    reveals.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (

            top <

            window.innerHeight - 100

        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================================
   HEADER SCROLL
===================================================== */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,17,23,.98)";

    } else {

        header.style.background =
            "rgba(15,17,23,.95)";

    }

});


/* =====================================================
   NAVEGAÇÃO PARA A RIFA
===================================================== */

document
    .querySelectorAll(".btn-primary")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const rifa =
                document.getElementById("rifa");

            if (rifa) {

                rifa.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


/* =====================================================
   NAVEGAÇÃO PARA O RANKING
===================================================== */

document
    .querySelectorAll(".btn-secondary")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const ranking =
                document.getElementById("ranking");

            if (ranking) {

                ranking.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const anoAtual =
    document.getElementById("anoAtual");

if (anoAtual) {

    anoAtual.textContent =
        new Date().getFullYear();

}
