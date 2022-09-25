function buscaImagem() {
  function toJson(data) {
    return data.json();
  }
  return fetch("https://dog.ceo/api/breed/hound/images/random/30").then(toJson);
}

buscaImagem().then(construirLista);

function construirLista(listaImg) {
  const lista = listaImg.message;
  const olListaImg = document.getElementById("lista-img");

  for (let posicao = 0; posicao < lista.length; posicao++) {
    const item = lista[posicao];
    const itemHtml = "<li><img src=\"" + item + "\"></li>";
    olListaImg.innerHTML = olListaImg.innerHTML + itemHtml;
    
  }
}
