const blue = "rgb(0, 0, 255)";
const red = "rgb(255, 0, 0)";
const ligado = "Ligado";
const desligado = "Desligado";
const aberto = "Aberto";
const fechado = "Fechado";
const leftLigado = "69px";
const leftDesligado = "54px";
const linkHeroku = "https://apicsharp-cti.herokuapp.com/HelloWorld/acao?path=";

function onToggle(abertoFechado) {
    return function() {
        const element = $(this);
        const path = element.css("background-color") === red ? element.attr("id") : "desliga_" + element.attr("id");
        const newColor = element.css("background-color") === red ? blue : red;
        //const novoLeft = element.css("background-color") === red ? leftLigado : leftDesligado;
        let estado;
        if(abertoFechado){
            estado = element.css("background-color") === red ? aberto : fechado;
        }else{
            estado = element.css("background-color") === red ? ligado : desligado;
            // $(".control.luz-quarto-visita-direita").css("left", novoLeft);
            // // console.log($(".control.luz-quarto-visita-direita").css("left").toString());
        }
        element.css("background-color", newColor);
        element.children("span").eq(0).text(estado);
        //console.log(path);
        Chamar_Dados(path);
    };
}

$(document).ready(function(){
    $("#fridge").click(onToggle());
    $("#tv-quarto").click(onToggle());
    $("#tv-sala").click(onToggle());
    $("#tv-quarto-visita").click(onToggle());
    $("#porta-garagem").click(onToggle(true));
    $("#luz_azul").click(onToggle());
    $("#luz_branca").click(onToggle());
    $("#luz_vermelha").click(onToggle());
    //$(".control.luz-quarto-visita-direita").click(onToggle());
    $("#luz-quarto-visita-esquerda").click(onToggle());
    //$("#alarme").click(onToggle());
    //$("#alarme").click(pegarCor());
});

function Chamar_Dados(url){
    fetch(`${linkHeroku}${url}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            //console.log(dados.resposta);
            document.querySelector("#fridge").innerHTML = dados.resposta;
        });
}


/*const pegarCor = window.setInterval(function(){
    var hex = document.getElementById("color").value;
    //var hex = "#ff64c8";
    var red = parseInt(hex[1]+hex[2],16);
    var green = parseInt(hex[3]+hex[4],16);
    var blue = parseInt(hex[5]+hex[6],16);
    console.log(red,green,blue);

    fetch(`${linkHeroku}led_rgb%26red=${red}%26green=${green}%26blue=${blue}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            console.log(dados.resposta);
            //document.querySelector("#temperatura").innerHTML = dados.resposta + " ºC";
        });
},100)*/

const temperatura1second = window.setInterval(function(){
    console.log("chamou a funcao")
    
    fetch(`${linkHeroku}temperatura`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            //console.log(dados.resposta);
            document.querySelector("#temperatura").innerHTML = dados.resposta + " ºC";
        });
},1000)