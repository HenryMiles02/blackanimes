const carrossel = document.getElementById("carrossel1")

var card1 = `           
<div class="container-carrossel" id="img1">
    <div class="slide">
        <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
        <img src="img/banner-jujutsu-carrosse.jfif" alt="" class="bg-carrosel" id="imgContainer">
        <!--"img/banner-jujutsu-carrosse.jfif", "img/banner-rimuro-carrossel.jpg", "img/banner-kimetsu-carrossel.jfif"-->
        <button class="btn-slide" onclick="nextButton()"> &gt; </button>
    </div>

    <div class="slide-card">
        <div class="descricao">
            <h1>Jujutsu Kaisen</h1>
            <div class="temp-class">
                <img src="img/icons/A16.jpg" alt="">
                <p>3 Temporadas</p>
            </div>
        </div>
        <p class="text">
            Yuji Itadori, um estudante do ensino médio que se envolve no mundo das maldições após ingerir um
            poderoso objeto amaldiçoado: o dedo do espírito maligno Ryomen Sukuna. Com a ajuda de outros exorcistas,
            como Megumi Fushiguro e Nobara Kugisaki, Yuji luta contra seres sobrenaturais enquanto busca uma maneira
            de controlar Sukuna e proteger seus amigos.
        </p>
        <div class="card-buttons">
            <button>Assitir agora</button>
            <a href="#" class="favorite"></a>
        </div>
    </div>
</div> 
`
var card2 = `
<div class="container-carrossel" id="card2">
                <div class="slide">
                    <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
                    <img src="img/banner-kimetsu-carrossel.jfif" alt="" class="bg-carrosel">
                    <button class="btn-slide"onclick="nextButton()"> &gt; </button>
                </div>
                
                <div class="slide-card">
                    <div class="descricao">
                        <h1>Kimetsu no Yaiba</h1>
                        <div class="temp-class">
                            <img src="img/icons/A16.jpg" alt="">
                            <p>3 Temporadas</p>
                        </div>
                    </div>
                    <p class="text">
                        Tanjiro Kamado é um jovem que busca vingar sua família, assassinada por demônios, e salvar sua irmã Nezuko, que foi transformada em um deles. Ele se junta aos Caçadores de Demônios para lutar contra essas criaturas e poder salvar sua irmã.
                    </p>
                    <div class="card-buttons">
                        <button>Assitir agora</button>
                        <a href="#" class="favorite"></a>
                    </div>
                </div>
            </div>
`
var card3 = `
<div class="container-carrossel" id="card3">
                <div class="slide">
                    <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
                    <img src="img/banner-one-piece-carrossel.jpg" alt="" class="bg-carrosel">
                    <button class="btn-slide" onclick="nextButton()"> &gt; </button>
                </div>
                
                <div class="slide-card">
                    <div class="descricao">
                        <h1>One Piece</h1>
                        <div class="temp-class">
                            <img src="img/icons/A14.jpg" alt="">
                            <p>11 Temporadas</p>
                        </div>
                    </div>
                    <p class="text">
                        One Piece é um anime que segue as aventuras de Monkey D. Luffy, um jovem pirata que sonha em se tornar o Rei dos Piratas. Com a habilidade de esticar seu corpo como borracha, Luffy forma a tripulação dos Chapéus de Palha e embarca em uma jornada pela Grand Line em busca do lendário tesouro "One Piece".
                    </p>
                    <div class="card-buttons">
                        <button>Assitir agora</button>
                        <a href="#" class="favorite"></a>
                    </div>
                </div>
            </div>
`
var card4 = `
<div class="container-carrossel" id="card4">
                <div class="slide">
                    <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
                    <img src="img/banner-rimuro-carrossel.jpg" alt="" class="bg-carrosel">
                    <button class="btn-slide" onclick="nextButton()"> &gt; </button>
                </div>
                
                <div class="slide-card">
                    <div class="descricao">
                        <h1>That Time I Got Reincarnated as a Slime</h1>
                        <div class="temp-class">
                            <img src="img/icons/A14.jpg" alt="">
                            <p>3 Temporadas</p>
                        </div>
                    </div>
                    <p class="text">
                        Satoru Mikami, um homem comum que, após ser morto, reencarna em um mundo de fantasia como um slime. Com habilidades únicas, ele ganha o nome de Rimuru Tempest e começa a construir um novo lar para monstros, buscando a paz e a prosperidade. Rimuru forma alianças com diversas espécies e enfrenta poderosos inimigos, fazendo novas amizades, obtendo poder e sempre vivendo uma aventura.
                    </p>
                    <div class="card-buttons">
                        <button>Assitir agora</button>
                        <a href="#" class="favorite"></a>
                    </div>
                </div>
            </div>
`
var card5 = `
<div class="container-carrossel" id="card5">
                <div class="slide">
                    <button class="btn-slide" onclick="beforeButton()"> &lt; </button>
                    <img src="img/banner-sao-carrossel.jpg" alt="" class="bg-carrosel">
                    <button class="btn-slide" onclick="nextButton()"> &gt; </button>
                </div>
                
                <div class="slide-card">
                    <div class="descricao">
                        <h1>Sworld Art Oline</h1>
                        <div class="temp-class">
                            <img src="img/icons/A14.jpg" alt="">
                            <p>3 Temporadas</p>
                        </div>
                    </div>
                    <p class="text">
                        Em um futuro próximo, foi lançado um Jogo de Realidade Virtual em Massa para Múltiplos Jogadores Online (VRMMORPG) chamado Sword Art Online, onde seus jogadores controlam seus personagens com o próprio corpo usando um dispositivo tecnológico chamado: NerveGear. Um dia, os jogadores descobrem que não podem sair do jogo, pois o criador do jogo os mantêm presos a menos que eles cheguem ao 100º andar da Torre e derrotem o Boss final. No entanto, se eles morrerem no jogo, morrerão também na vida real.
                    </p>
                    <div class="card-buttons">
                        <button>Assitir agora</button>
                        <a href="#" class="favorite"></a>
                    </div>
                </div>
            </div>
`

lista = [card1, card2, card3, card4, card5]

indice = 0

function nextButton() {
    indice ++;
    if (indice >= lista.length) {
        indice = 0;
    }
    carrossel.innerHTML = lista[indice];
}

function beforeButton() {
    indice--;
    if (indice < 0) {
        indice = lista.length -1;
    }
    carrossel.innerHTML = lista[indice];
}

const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
       0: {
        slidesPerView: 1
       },
       760: {
        slidesPerView: 2
       },
       1024: {
        slidesPerView: 6
       },
    }
  });