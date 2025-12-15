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
    const botao = document.querySelector('.principal__botao');
    botao.addEventListener('click', avisar);

    const botaoMenu = document.querySelector('.painel__menu');
    botaoMenu.addEventListener('click', abrirMenu);

    const botaoBusca = document.querySelector('.painel__busca');
    botaoBusca.addEventListener('click', buscarNoSite);
}

window.addEventListener('load', addEvent);