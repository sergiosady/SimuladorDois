function avisar() {
    alert("Você clicou no botão!");
}

function addEvent() {
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', avisar);
}

window.addEventListener('load', addEvent);