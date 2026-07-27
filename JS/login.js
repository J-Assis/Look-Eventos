/* ==========================================
   LOGIN.JS - LOOK EVENTOS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    //==============================
    // ELEMENTOS
    //==============================

    const form = document.getElementById("loginForm");

    const email = document.getElementById("email");

    const senha = document.getElementById("senha");

    const btnEntrar = document.querySelector(".login-btn");

    const togglePassword = document.getElementById("togglePassword");

    //==============================
    // MOSTRAR SENHA
    //==============================

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if (senha.type === "password") {

            senha.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            senha.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

    //==============================
    // LOGIN
    //==============================

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        limparErros();

        if (!validarFormulario()) return;

        loading(true);

        const dadosLogin = {

            email: email.value.trim(),

            senha: senha.value

        };

        try {

            /*
            ===========================================
            QUANDO O BACKEND ESTIVER PRONTO:

            const resposta = await fetch(
                "http://localhost:3000/login",
                {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(dadosLogin)
                }
            );

            const dados = await resposta.json();

            if(!resposta.ok){

                mostrarErro(email,dados.mensagem);

                loading(false);

                return;

            }

            localStorage.setItem("token",dados.token);

            window.location.href="dashboard.html";
            ===========================================
            */

            // Simulação temporária

            setTimeout(() => {

                alert("Login realizado com sucesso!");

                window.location.href = "index.html";

            }, 1200);

        } catch (erro) {

            console.error(erro);

            alert("Erro ao conectar ao servidor.");

            loading(false);

        }

    });

    //==============================
    // VALIDAÇÕES
    //==============================

    function validarFormulario() {

        let valido = true;

        if (email.value.trim() === "") {

            mostrarErro(email, "Informe seu e-mail.");

            valido = false;

        }

        else if (!validarEmail(email.value)) {

            mostrarErro(email, "E-mail inválido.");

            valido = false;

        }

        if (senha.value.trim() === "") {

            mostrarErro(senha, "Informe sua senha.");

            valido = false;

        }

        else if (senha.value.length < 6) {

            mostrarErro(senha, "Senha inválida.");

            valido = false;

        }

        return valido;

    }

    function validarEmail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }

    //==============================
    // ERROS
    //==============================

    function mostrarErro(input, mensagem) {

        input.style.border = "2px solid #dc2626";

        const erro = document.createElement("small");

        erro.className = "erro";

        erro.textContent = mensagem;

        input.parentElement.parentElement.appendChild(erro);

    }

    function limparErros() {

        document.querySelectorAll(".erro").forEach(e => e.remove());

        email.style.border = "";

        senha.style.border = "";

    }

    //==============================
    // LOADING
    //==============================

    function loading(status) {

        if (status) {

            btnEntrar.disabled = true;

            btnEntrar.innerHTML = `

                <i class="fa-solid fa-spinner fa-spin"></i>

                Entrando...

            `;

        } else {

            btnEntrar.disabled = false;

            btnEntrar.innerHTML = "Entrar";

        }

    }

});
