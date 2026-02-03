const NovoTexto = document.querySelector("#TextoAparece");
const ImagemLinda = document.querySelector(".ImagemDesaparece");
const SomLindo = new Audio("Hometown Cha-Cha-Cha OST - Romantic Sunday (Car the Garden).mp3")

function Btn() {
    ImagemLinda.classList.remove("ImagemDesaparece");
    NovoTexto.innerHTML = "Vai dar namoro <strong>SIM!</strong>";
    SomLindo.loop = true;
    SomLindo.play();
};