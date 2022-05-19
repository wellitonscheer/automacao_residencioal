(function() {
    window.resp = function(r) {
        if (r.status === true) {
            $("#temperatura").html(`${r.response.temperatura} ºC`);
            setTimeout(atualiza_temperatura, 60 * 1000);
        } else {
            $("#temperatura").html("-");
            setTimeout(atualiza_temperatura, 5 * 1000);
        }
    };
    var atualiza_temperatura = function() {
        if (window.jQuery)
        {
            $.ajax({
                url: "https://estacao.setrem.com.br/api/temperatura",
                dataType: "jsonp",
                type: "post",
                crossDomain: true,
                success:resp
            });
        } else {

            setTimeout(atualiza_temperatura, 10);
        }
    };
    setTimeout(atualiza_temperatura, 0);
})();