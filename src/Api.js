export class Api {
   
   static buscaNoticia(){
    
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const list = document.createElement("ul");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const head = document.createElement("div");

    head.classList.add("head")
    list.classList.add("list");
    body.classList.add("container");
    
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
    main.appendChild(head);
    main.appendChild(list);
    
    fetch("https://kenzie-news-api.herokuapp.com/api/news",{
      method: "GET",
      header: this.headers
    })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //localStorage.setItem("meuTitulo",JSON.stringify(data))
    //console.log(JSON.parse(localStorage.getItem("meuTitulo")))
    data.forEach((element) => {
      /* let randomN = data.id.sort() 
      function randomize(min,max){
        Math.random() * (max - min) + min;
      }
      parseInt(randomize(min,max))
      */
      if (element.id == 7) {
        const image = document.createElement("img");
        const box = document.createElement("div");
        const category = document.createElement("h3");
        const title = document.createElement("h1");
        const brief = document.createElement("article");
        const source = document.createElement("p");

        image.src = element.imagem;
        image.alt ="imagem";
        category.innerText = element.categoria;
        title.innerText = `${element.titulo}`;
        brief.innerText = element.resumo;
        source.innerText = `Fonte: ${element.fonte}`;
    
        head.appendChild(image);
        head.appendChild(box)
        box.appendChild(category);
        box.appendChild(title);
        box.appendChild(brief);
        box.appendChild(source)
      } else {
        const box = document.createElement("div")
        const card = document.createElement("li");
        const image = document.createElement("img");
        const category = document.createElement("h3");
        const title = document.createElement("h2");
        const brief = document.createElement("article");
        const source = document.createElement("p");

        card.classList.add("card")
        box.classList.add("wide")

        image.src = element.imagem;
        image.alt ="imagem";
        category.innerText = element.categoria;
        title.innerText = element.titulo;
        brief.innerText = element.resumo;
        source.innerText = `Fonte: ${element.fonte}`;

        box.appendChild(category);
        box.appendChild(title);
        box.appendChild(brief);
        box.appendChild(source);
        card.appendChild(image);
        card.appendChild(box);
        list.appendChild(card);
      }
    });
  });
}
}
