// script.js

// Função para alternar o menu lateral
function toggleMenu() {
    const sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
}

// Atualiza o ano no rodapé
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Validação de formulário (opcional)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error'); // Adiciona uma classe de erro (você pode definir estilos para isso)
            } else {
                input.classList.remove('error'); // Remove a classe de erro se o campo estiver preenchido
            }
        });

        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
            alert('Por favor, preencha todos os campos obrigatórios.'); // Mensagem de alerta
        }
    });
});

// Adiciona eventos de mouse para abrir e fechar o menu
const sideNav = document.querySelector('.side-nav');
const menuToggle = document.querySelector('.menu-toggle');

let timeout;

menuToggle.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpa o timeout se o mouse entrar novamente
    toggleMenu(); // Abre o menu
});

sideNav.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        toggleMenu(); // Fecha o menu após 300ms
    }, 300); // Atraso de 300ms
});

