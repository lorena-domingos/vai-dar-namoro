const NovoTexto = document.querySelector("#TextoAparece");
const ImagemLinda = document.querySelector(".ImagemDesaparece");

function Btn() {
    ImagemLinda.classList.remove("ImagemDesaparece");
    NovoTexto.innerHTML = "Vai dar namoro SIM!";
};