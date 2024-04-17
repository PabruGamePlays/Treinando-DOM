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


//4 - Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsiderContainer = document.querySelector("#div-btn");
containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
});
btnInsiderContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2")
});


//5 - removendo eventro padrão
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Não alterou a página");
});


//6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});


//7 - eventos de mouse
const mouseEvents = document.querySelector("#mouse");
mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});
mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});
mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});


//8 - movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x} e no eixo Y: ${e.y}`)
// })