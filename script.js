// --- IMPORTANTE: Lembre-se de adicionar comentários próprios explicando as lógicas de relevância! ---

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Alternador de Tema (Claro / Escuro)
    const btnTema = document.getElementById("themeToggle");
    
    btnTema.addEventListener("click", () => {
        // Alterna a classe no elemento principal HTML
        document.body.classList.toggle("dark-theme");
    });

    // 2. Menu Responsivo 
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu automaticamente ao clicar em um link de âncora
    const linksMenu = document.querySelectorAll("#navMenu a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 3. Validação Complexa e Simulação de Envio do Formulário
    const form = document.getElementById("formContato");
    const statusForm = document.getElementById("statusFormulario");

    form.addEventListener("submit", (evento) => {
        // Interrompe o envio nativo da página
        evento.preventDefault();

        // Captura de valores dos inputs limpando espaços extras
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Expressão Regular (Regex) para validar padrão estrito de e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset visual da caixa de status
        statusForm.style.display = "none";
        statusForm.style.backgroundColor = "";
        statusForm.style.color = "";

        // Verificação de campos em branco
        if (nome === "" || email === "" || mensagem === "") {
            statusForm.textContent = "Erro: Por favor, preencha todos os campos obrigatórios!";
            statusForm.style.backgroundColor = "#ffdddd";
            statusForm.style.color = "#cc0000";
            statusForm.style.display = "block";
            return;
        }

        // Teste de validação sintática do e-mail
        if (!regexEmail.test(email)) {
            statusForm.textContent = "Erro: Insira um formato de e-mail válido (ex: usuario@dominio.com).";
            statusForm.style.backgroundColor = "#ffdddd";
            statusForm.style.color = "#cc0000";
            statusForm.style.display = "block";
            return;
        }

        // Caso passe nas validações: Simulação de Sucesso
        statusForm.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        statusForm.style.backgroundColor = "#ddffdd";
        statusForm.style.color = "#006600";
        statusForm.style.display = "block";

        // Alerta nativo exigido pelos critérios da atividade
        alert("Mensagem enviada com sucesso!");

        // Limpa totalmente os campos do formulário pós-envio
        form.reset();
    });
});
