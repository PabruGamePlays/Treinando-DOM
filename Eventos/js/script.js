//1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("clicou aqui")
});


//2 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);
const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});


//3 - argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});