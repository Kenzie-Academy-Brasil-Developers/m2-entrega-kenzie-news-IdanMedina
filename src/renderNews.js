function renderNews(array) {
    array.forEach((element) => {
    if (element.id == 7) {
    const image = document.createElement("img");
    const category = document.createElement("h3");
    const title = document.createElement("h1");
    const source = document.createElement("p")

    image.src = element.imagem;
    category.innerText = element.categoria;
    title.innerText = `${element.titulo}`;
    source.innerText = `Fonte: ${element.fonte}`;

    head.appendChild(image);
    head.appendChild(category);
    head.appendChild(title);
    head.appendChild(source)
  } else {
    const card = document.createElement("li");
    const category = document.createElement("h3");
    const title = document.createElement("h2");
    const brief = document.createElement("article");
    const source = document.createElement("p");

    card.classList.add("card")

    category.innerText = element.categoria;
    title.innerText = element.titulo;
    brief.innerText = element.resumo;
    source.innerText = `Fonte: ${element.fonte}`;

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(brief);
    card.appendChild(source);
    list.appendChild(card);
  }
})
};