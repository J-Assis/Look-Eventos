/* ==========================================
   CADASTRO.JS
   LOOK EVENTOS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    //=========================
    // ELEMENTOS
    //=========================

    const form = document.getElementById("cadastroForm");

    const nome = document.getElementById("nome");

    const email = document.getElementById("email");

    const senha = document.getElementById("senha");

    const confirmarSenha = document.getElementById("confirmarSenha");

    const toggleSenha = document.getElementById("toggleSenha");

    const botao = document.querySelector(".cadastro-btn");


    //=========================
    // MOSTRAR SENHA
    //=========================

    toggleSenha.addEventListener("click", () => {

        const icone = toggleSenha.querySelector("i");

        if (senha.type === "password") {

            senha.type = "text";

            confirmarSenha.type = "text";

            icone.classList.remove("fa-eye");

            icone.classList.add("fa-eye-slash");

        } else {

            senha.type = "password";

            confirmarSenha.type = "password";

            icone.classList.remove("fa-eye-slash");

            icone.classList.add("fa-eye");

        }

    });


    //=========================
    // ENVIO
    //=========================

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        limparErros();

        if (!validarFormulario()) {

            return;

        }

        loading(true);

        const usuario = {

            nome: nome.value.trim(),

            email: email.value.trim(),

            senha: senha.value

        };

        console.log(usuario);

        /*
        ==========================================

        BACK-END

        const resposta = await fetch(
            "http://localhost:3000/usuarios",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(usuario)
            }
        );

        const dados = await resposta.json();

        if(!resposta.ok){

            alert(dados.mensagem);

            loading(false);

            return;

        }

        ==========================================
        */

        setTimeout(() => {

            alert("Conta criada com sucesso!");

            window.location.href = "login.html";

        }, 1500);

    });


    //=========================
    // VALIDAÇÕES
    //=========================

    function validarFormulario() {

        let valido = true;

        if (nome.value.trim().length < 3) {

            mostrarErro(nome, "Informe seu nome completo.");

            valido = false;

        }

        if (!validarEmail(email.value)) {

            mostrarErro(email, "Digite um e-mail válido.");

            valido = false;

        }

        if (senha.value.length < 6) {

            mostrarErro(senha, "A senha deve possuir pelo menos 6 caracteres.");

            valido = false;

        }

        if (senha.value !== confirmarSenha.value) {

            mostrarErro(confirmarSenha, "As senhas não coincidem.");

            valido = false;

        }

        return valido;

    }


    //=========================
    // EMAIL
    //=========================

    function validarEmail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }


    //=========================
    // ERROS
    //=========================

    function mostrarErro(input, mensagem) {

        input.style.border = "2px solid #dc2626";

        const erro = document.createElement("small");

        erro.className = "erro";

        erro.innerText = mensagem;

        input.parentElement.parentElement.appendChild(erro);

    }

    function limparErros() {

        document.querySelectorAll(".erro").forEach(e => e.remove());

        nome.style.border = "";

        email.style.border = "";

        senha.style.border = "";

        confirmarSenha.style.border = "";

    }


    //=========================
    // LOADING
    //=========================

    function loading(status) {

        if (status) {

            botao.disabled = true;

            botao.innerHTML = `

                <i class="fa-solid fa-spinner fa-spin"></i>

                Criando conta...

            `;

        } else {

            botao.disabled = false;

            botao.innerHTML = "Criar Conta";

        }

    }

});
