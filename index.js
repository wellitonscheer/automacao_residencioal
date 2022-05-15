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