function avisar() {
    alert("Você clicou no botão!");
}

function abrirMenu() {
    alert("Você clicou no menu!");
}

function buscarNoSite() {
    alert("Você clicou na busca!");
}

function addEvent() {
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', avisar);

    const botaoMenu = document.getElementById('botaoMenu');
    botaoMenu.addEventListener('click', abrirMenu);

    const botaoBusca = document.getElementById('botaoBusca');
    botaoBusca.addEventListener('click', buscarNoSite);
}

window.addEventListener('load', addEvent);