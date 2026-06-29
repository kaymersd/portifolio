// Espera a página carregar toda antes de rodar o script para não dar erro de elemento sumido
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sistema do Botão do Tema Escuro / Claro
    const btnTema = document.getElementById("themeToggle");
    
    btnTema.addEventListener("click", () => {
        // Coloca ou tira a classe 'dark-theme' do body toda vez que clica
        document.body.classList.toggle("dark-theme");
    });

    // 2. Menu do Celular (Hambúrguer)
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        // Abre e fecha a barrinha do menu no mobile
        navMenu.classList.toggle("active");
    });

    // Se o usuário clicar em um link do menu, fecha a barra para não cobrir a tela
    const linksMenu = document.querySelectorAll("#navMenu a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 3. Validação do Formulário de Contato
    const form = document.getElementById("formContato");
    const statusForm = document.getElementById("statusFormulario");

    form.addEventListener("submit", (evento) => {
        // Segura o envio padrão para a página não atualizar sozinha
        evento.preventDefault();

        // Pega o que foi digitado e o trim() tira os espaços vazios que as pessoas deixam sem querer
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Regra para checar se o e-mail tem o formato certo (texto + @ + texto + .com)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Limpa as mensagens de erro antigas toda vez que a pessoa tenta reenviar
        statusForm.style.display = "none";
        statusForm.style.backgroundColor = "";
        statusForm.style.color = "";

        // Testa se tem algum campo em branco
        if (nome === "" || email === "" || mensagem === "") {
            statusForm.textContent = "Erro: Por favor, preencha todos os campos obrigatórios!";
            statusForm.style.backgroundColor = "#ffdddd"; // Fundo vermelho clarinho
            statusForm.style.color = "#cc0000";
            statusForm.style.display = "block";
            return; // Para o código aqui se der erro
        }

        // Valida se o e-mail digitado faz sentido com a nossa regra lá de cima
        if (!regexEmail.test(email)) {
            statusForm.textContent = "Erro: Insira um formato de e-mail válido (ex: usuario@dominio.com).";
            statusForm.style.backgroundColor = "#ffdddd";
            statusForm.style.color = "#cc0000";
            statusForm.style.display = "block";
            return; // Para o código aqui se o e-mail estiver errado
        }

        // Se o código chegou até aqui, significa que deu tudo certo!
        statusForm.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        statusForm.style.backgroundColor = "#ddffdd"; // Fundo verde clarinho
        statusForm.style.color = "#006600";
        statusForm.style.display = "block";

        // Alerta na tela para dar um feedback direto pro usuário
        alert("Mensagem enviada com sucesso!");

        // Limpa todos os campos do formulário para o usuário poder escrever outro se quiser
        form.reset();
    });
});
