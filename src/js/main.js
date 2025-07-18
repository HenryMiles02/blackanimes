//carrossel grande

const carrossel = document.getElementById("slider")

const cards= [
    {
        title: "Jujutsu Kaisen",
        img: "img/banner-jujutsu-carrosse.jfif",
        age_rating: "A16",
        seasons: 3,
        description: "Yuji Itadori, um estudante do ensino médio que se envolve no mundo das maldições após ingerir um poderoso objeto amaldiçoado: o dedo do espírito maligno Ryomen Sukuna. Com a ajuda de outros exorcistas, como Megumi Fushiguro e Nobara Kugisaki, Yuji luta contra seres sobrenaturais enquanto busca uma maneira de controlar Sukuna e proteger seus amigos.",
    },
    {
      title: "Kimetsu no Yaiba",
      img: "img/banner-kimetsu-carrossel.jfif",
      age_rating: "A16",
      seasons: 3,
      description: "Tanjiro Kamado é um jovem que busca vingar sua família, assassinada por demônios, e salvar sua irmã Nezuko, que foi transformada em um deles. Ele se junta aos Caçadores de Demônios para lutar contra essas criaturas e poder salvar sua irmã.",
    },
    {
        title: "One Piece",
        img: "img/banner-one-piece-carrossel.jpg",
        age_rating: "A14",
        seasons: "11 Temporadas",
        description: "One Piece é um anime que segue as aventuras de Monkey D. Luffy, um jovem pirata que sonha em se tornar o Rei dos Piratas. Com a habilidade de esticar seu corpo como borracha, Luffy forma a tripulação dos Chapéus de Palha e embarca em uma jornada pela Grand Line em busca do lendário tesouro 'One Piece'.",
    },
    {
        title: "That Time I Got Reincarnated as a Slime",
        img: "img/banner-rimuro-carrossel.jpg",
        age_rating: "A14",
        seasons: 3,
        description: "Satoru Mikami, um homem comum que, após ser morto, reencarna em um mundo de fantasia como um slime. Com habilidades únicas, ele ganha o nome de Rimuru Tempest e começa a construir um novo lar para monstros, buscando a paz e a prosperidade. Rimuru forma alianças com diversas espécies e enfrenta poderosos inimigos, fazendo novas amizades, obtendo poder e sempre vivendo uma aventura.",
    },
    {
        title: "Sword Art Online",
        img: "img/banner-sao-carrossel.jpg",
        age_rating: "A14",
        seasons: 3,
        description: "Em um futuro próximo, foi lançado um Jogo de Realidade Virtual em Massa para Múltiplos Jogadores Online (VRMMORPG) chamado Sword Art Online, onde seus jogadores controlam seus personagens com o próprio corpo usando um dispositivo tecnológico chamado: NerveGear. Um dia, os jogadores descobrem que não podem sair do jogo, pois o criador do jogo os mantêm presos a menos que eles cheguem ao 100º andar da Torre e derrotem o Boss final. No entanto, se eles morrerem no jogo, morrerão também na vida real.",
    },
]

let indice = 0;

function renderCard(index) {
    const {title, img, age_rating, seasons, description} = cards[index];

    carrossel.innerHTML = `
      <div class="container-carrossel">
        <div class="slide">
          <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
          <img src="${img}" alt="" class="bg-carrosel">
          <button class="btn-slide" onclick="nextButton()"> &gt; </button>
        </div>
        <div class="slide-card">
            <div class="info">
                <div class="descricao">
                    <h1>${title}</h1>
                    <div class="temp-class">
                        <img src="img/icons/${age_rating}.jpg" alt="">
                        <p>${seasons} Temporada</p>
                    </div>
                </div>
                    <p class="text">${description}</p>
                <div class="card-buttons">
                    <button>Assistir agora</button>
                </div>
            </div>
        </div>
      </div>`;
}

window.nextButton = function () {
    indice = (indice + 1) % cards.length;
    renderCard(indice);
};

 window.beforeButton = function() {
    indice = (indice - 1 + cards.length) % cards.length;
    renderCard(indice);
}

renderCard(indice);