function avisar() {
  alert("Você clicou no botão!");
}

function abrirMenu() {
  alert("Você clicou no menu!");
}

function buscarNoSite() {
  alert("Você clicou em busca!");
}

function paginaPrincipal() {
  alert("Você já está na página principal.");
}

function addEvent() {
  const botao = document.querySelector(".principal__botao");
  botao.addEventListener("click", avisar);

  const botaoMenu = document.querySelector(".painel__menu");
  botaoMenu.addEventListener("click", abrirMenu);

  const botaoBusca = document.querySelector(".painel__busca");
  botaoBusca.addEventListener("click", buscarNoSite);

  const botaoLogo = document.querySelector(".painel__logo");
  botaoLogo.addEventListener("click", paginaPrincipal);
}

window.addEventListener("load", addEvent);
