/* Troca de tema */
const botoesTema = document.querySelectorAll(".tema-btn");

botoesTema.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const tema = botao.getAttribute("data-tema");

        document.body.classList.remove("theme-space", "theme-light", "theme-purple");
        document.body.classList.add(tema);
    });
});


/* Menu responsivo */
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});

// fecha o menu quando clicar em um link
const linksMenu = menu.querySelectorAll("a");
linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
    });
});

/* Slideshow */
const slides = document.querySelectorAll(".slide");
const bolinhasDiv = document.getElementById("bolinhas");
let slideAtual = 0;

// uma bolinha para cada slide
slides.forEach(function (slide, indice) {
    const bolinha = document.createElement("span");
    bolinha.classList.add("bolinha");
    bolinha.addEventListener("click", function () {
        mostrarSlide(indice);
    });
    bolinhasDiv.appendChild(bolinha);
});

const bolinhas = document.querySelectorAll(".bolinha");

function mostrarSlide(indice) {
    if (indice >= slides.length) {
        indice = 0;
    }
    if (indice < 0) {
        indice = slides.length - 1;
    }
    slideAtual = indice;

    // esconde todos e mostra o atual
    slides.forEach(function (slide) {
        slide.classList.remove("ativo");
    });
    bolinhas.forEach(function (bolinha) {
        bolinha.classList.remove("ativa");
    });

    slides[slideAtual].classList.add("ativo");
    bolinhas[slideAtual].classList.add("ativa");
}

document.getElementById("proxima").addEventListener("click", function () {
    mostrarSlide(slideAtual + 1);
});

document.getElementById("anterior").addEventListener("click", function () {
    mostrarSlide(slideAtual - 1);
});

// passa os slides a cada 5 segundos
setInterval(function () {
    mostrarSlide(slideAtual + 1);
}, 5000);

mostrarSlide(0);
