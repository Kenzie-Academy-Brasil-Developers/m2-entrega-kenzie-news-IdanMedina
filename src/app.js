const body = document.querySelector("body")
body.classList.add("container")
fetch("https://kenzie-news-api.herokuapp.com/api/news")
.then(res => {
    return res.json()
})
.then(dataKnews => {
console.log(dataKnews)
//localStorage.getItem(dataKnews.titulo)
//localStorage.getItem(dataKnews.imagem)

const title = document.createElement("h1")
const image = document.createElement("img")

title.innerText = `${dataKnews.titulo}`
image.src = dataKnews.imagem

body.appendChild(title)
body.appendChild(image)
}
)