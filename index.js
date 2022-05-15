const blue = "rgb(0, 0, 255)";
const red = "rgb(255, 0, 0)";
const ligado = "Ligado";
const desligado = "Desligado";
const aberto = "Aberto";
const fechado = "Fechado";

function onToggle(abertoFechado) {
    return function() {
        const element = $(this);
        const newColor = element.css("background-color") === red ? blue : red;
        let estado;
        if(abertoFechado){
            estado = element.css("background-color") === red ? aberto : fechado;
        }else{
            estado = element.css("background-color") === red ? ligado : desligado;
        }
        element.css("background-color", newColor);
        element.children("span").eq(0).text(estado);
    };
}

$(document).ready(function(){
    $("#fridge").click(onToggle());
    $("#tv-quarto").click(onToggle());
    $("#tv-sala").click(onToggle());
    $("#tv-quarto-visita").click(onToggle());
    $("#porta-garagem").click(onToggle(true));
    $("#luz-quarto-esquerda").click(onToggle());
    $("#luz-quarto-direita").click(onToggle());
    $("#luz-quarto-visita-direita").click(onToggle());
    $("#luz-quarto-visita-esquerda").click(onToggle());
});