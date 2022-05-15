const blue = "rgb(0, 0, 255)";
const red = "rgb(255, 0, 0)";
const ligado = "Ligado"
const desligado = "Desligado"

function onToggle() {
    return function() {
        const element = $(this);
        const newColor = element.css("background-color") === red ? blue : red;
        const estado = element.css("background-color") === red ? ligado : desligado;
        element.css("background-color", newColor);
        element.text(estado);
    };
}

$(document).ready(function(){
    $("#fridge").click(onToggle());
});

$(document).ready(function(){
    $("#tv-quarto").click(onToggle());
});

$(document).ready(function(){
    $("#tv-sala").click(onToggle());
});

$(document).ready(function(){
    $("#tv-quarto-visita").click(onToggle());
});

$(document).ready(function(){
    $("#porta-garagem").click(onToggle());
});

$(document).ready(function(){
    $("#luz-quarto-esquerda").click(onToggle());
});

$(document).ready(function(){
    $("#luz-quarto-direita").click(onToggle());
});

$(document).ready(function(){
    $("#luz-quarto-visita-direita").click(onToggle());
});

$(document).ready(function(){
    $("#luz-quarto-visita-esquerda").click(onToggle());
});

