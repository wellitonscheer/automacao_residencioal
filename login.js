//const linkC = "http://localhost:5000/HelloWorld/";
const linkC = "https://apicsharp-cti.herokuapp.com/HelloWorld/";

function Login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    console.log(usuario,senha);

    fetch(`${linkC}login?usuario=${usuario}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(dados => {
            //let dbUsuario = dados.resposta[0].login;
            let dbSenha = dados.resposta[0].senha;
            if(senha == dbSenha){
                window.location.href = "sem_imagem.html";
            }
            else{
                window.alert("Senha ou usuario incoretos")
            }
        });
}