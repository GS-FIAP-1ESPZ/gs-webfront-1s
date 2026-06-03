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


/* Quiz (10 perguntas) */
const perguntas = [
    {
        pergunta: "Qual é o tema central da Global Solution da FIAP?",
        opcoes: ["Tecnologia espacial aplicada a desafios reais", "Jogos digitais", "Culinária internacional", "História da arte"],
        correta: 0
    },
    {
        pergunta: "O que os satélites podem monitorar para ajudar o meio ambiente?",
        opcoes: ["Apenas o trânsito das cidades", "Desmatamento e emissões de carbono", "Programas de TV", "Preço de ações"],
        correta: 1
    },
    {
        pergunta: "Qual área usa imagens de satélite para aumentar a produtividade?",
        opcoes: ["Agricultura", "Teatro", "Moda", "Música"],
        correta: 0
    },
    {
        pergunta: "O que a conectividade via satélite permite?",
        opcoes: ["Diminuir o número de satélites", "Levar internet a regiões remotas", "Acabar com a internet", "Apenas ligações telefônicas"],
        correta: 1
    },
    {
        pergunta: "Qual tecnologia é usada para analisar grandes volumes de dados espaciais?",
        opcoes: ["Máquina de escrever", "Fax", "Inteligência Artificial", "Rádio AM"],
        correta: 2
    },
    {
        pergunta: "A 'economia espacial' está ligada a quê?",
        opcoes: ["Negócios e oportunidades ligados ao espaço", "Economizar energia em casa", "Cortar gastos do governo", "Guardar dinheiro no banco"],
        correta: 0
    },
    {
        pergunta: "Qual ODS está ligada à ação climática?",
        opcoes: ["ODS 1", "ODS 5", "ODS 13", "ODS 17"],
        correta: 2
    },
    {
        pergunta: "Dados espaciais também ajudam na prevenção de quê?",
        opcoes: ["Desastres naturais", "Falta de ingressos de cinema", "Atrasos de ônibus", "Filas em lojas"],
        correta: 0
    },
    {
        pergunta: "Sistemas autônomos e robótica são usados para quê?",
        opcoes: ["Decorar ambientes", "Exploração e operações no espaço", "Cozinhar comida", "Lavar roupas"],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo principal da Global Solution?",
        opcoes: ["Propor soluções com tecnologia e inovação para desafios da Terra", "Vender produtos online", "Criar uma rede social", "Organizar uma festa"],
        correta: 0
    }
];

const quizPerguntas = document.getElementById("quiz-perguntas");

// monta as perguntas na tela
perguntas.forEach(function (item, indice) {
    const divPergunta = document.createElement("div");
    divPergunta.classList.add("pergunta");

    let html = "<p class='pergunta-titulo'>" + (indice + 1) + ") " + item.pergunta + "</p>";

    item.opcoes.forEach(function (opcao, posicao) {
        html += "<label class='opcao'>";
        html += "<input type='radio' name='pergunta" + indice + "' value='" + posicao + "'>";
        html += opcao;
        html += "</label>";
    });

    divPergunta.innerHTML = html;
    quizPerguntas.appendChild(divPergunta);
});