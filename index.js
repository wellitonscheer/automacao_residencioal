const blue = "rgb(0, 0, 255)";
const red = "rgb(255, 0, 0)";
const ligado = "Ligado";
const desligado = "Desligado";
const aberto = "Aberto";
const fechado = "Fechado";
const leftLigado = "69px";
const leftDesligado = "54px";

const linkHeroku = "https://apicsharp-cti.herokuapp.com/HelloWorld/acao?path=";
//const linkHeroku = "http://localhost:5000/HelloWorld/acao?path=";
//const linkC = "http://localhost:5000/HelloWorld/";
const linkC = "https://apicsharp-cti.herokuapp.com/HelloWorld/";

function onToggle(abertoFechado) {
    return function() {
        const element = $(this);
        const path = element.css("background-color") === red ? element.attr("id") : "desliga_" + element.attr("id");
        const newColor = element.css("background-color") === red ? blue : red;
        let acao = element.css("background-color") === red ? 1 : 2; //tem a ver com o banco, 1 = liga luz e 2 = desliga a luz
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
        EventoDb(element.attr("name"), acao, document.cookie);
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


function pegarCor(){
    var hex = document.getElementById("color").value;
    //var hex = "#ff64c8";
    const Rred = parseInt(hex[1]+hex[2],16);
    const Ggreen = parseInt(hex[3]+hex[4],16);
    const Bblue = parseInt(hex[5]+hex[6],16);
    console.log(Rred,Ggreen,Bblue);

    fetch(`${linkHeroku}led_rgb%26red=${Rred}%26green=${Ggreen}%26blue=${Bblue}`, {
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
}

const temperatura1second = window.setInterval(function(){
    console.log(document.cookie);
    
    fetch(`${linkHeroku}temperatura`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            console.log(dados.resposta);
            document.querySelector("#temperatura").innerHTML = dados.resposta + " ºC";
        });
},1000)

function EventoDb(componente, acao, usuario){
    console.log(componente, acao, usuario);
    fetch(`${linkC}evento?${usuario}&acao=${acao}&item=${componente}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            console.log(dados.resposta);
        });
    console.log(login);
}