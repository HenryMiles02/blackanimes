var carrossel1 = document.getElementById("imgContainer")

var contador = 0
var listImage = [
    "img/banner-jujutsu-carrosse.jfif",
    "img/banner-rimuro-carrossel.jpg",
    "img/banner-kimetsu-carrossel.jfif"
];

function nextButton() {
    contador++;
    if (contador >= listImage.length) {
        contador = 0;
    }
    carrossel1.src = listImage[contador];
}

function beforeButton() {
    contador--;
    if (contador < 0) {
        contador = listImage.length - 1;
    }
    carrossel1.src = listImage[contador];
}