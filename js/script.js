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