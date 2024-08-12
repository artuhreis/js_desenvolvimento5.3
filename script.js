let tituloSimples = document.createElement("h1");
const corpo = document.querySelector("body");

tituloSimples.id = "titulo";
tituloSimples.innerText = "Site Compras";
corpo.appendChild(tituloSimples);


console.log(tituloSimples);

const produtos = document.createElement("div");

produtos.innerHTML = `
    <h3 class= "post-produtos">Teclado Mecanico</h3>
    <p class = "post-descricao"> 
        <img src="./imagem/maxresdefault.jpg" alt="Redragon Fizz" style="width: 200px; height: 150px; border: 2px solid black; border-radius: 10px;"> </br>
        Teclado Mecanico Redragon Fizz </br>
        Switch Outemo Red </br>
        R$199,90
    </p>
`

corpo.appendChild(produtos);