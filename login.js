const linkC = "http://localhost:5000/HelloWorld/";
//const linkC = "https://apicsharp-cti.herokuapp.com/HelloWorld/";

$("#loginFor").submit(function(e){
    e.preventDefault();
    const dados = new FormData(e.target);
    let dadosObj = {}
    for (const [name,value] of dados) {
        dadosObj[name] = value;
    }

    try{
        fetch(`${linkC}login?usuario=${dadosObj.usuario}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(dados => {
                let dbSenha = dados.resposta[0].senha;
                let login = dados.resposta[0].login;
                if(dadosObj.senha == dbSenha){
                    document.cookie = `usuario=${login}; path=/`;
                    window.location.href = "../sem_imagem.html";
                }
                else{
                    window.alert("Senha ou usuario incoretos");
                }
            });
    }
    catch{
        window.alert("Senha ou usuario incoretos");
    }
    
});