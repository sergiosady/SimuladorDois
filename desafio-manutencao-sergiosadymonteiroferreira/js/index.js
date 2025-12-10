function avisar() {
    alert("Você clicou no botão!");
}

function abrirMenu() {
    alert("Você clicou no menu!");
}

function addEvent() {
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', avisar);

    const botaoMenu = document.getElementById('menu')
    botaoMenu.addEventListener('click', abrirMenu);
}

window.addEventListener('load', addEvent);