module.exports = function() {

    controller = {};

    controller.gravaContato = function(req, res) {
        
        var fs = require('fs');

        fs.writeFile("../arquivo/contato.txt", JSON.stringify(req.body), {flag: "a"}, function(erro) {

            if(erro) {
                throw erro;
            }

            console.log("Arquivo salvo");
        });
    };
    return controller;
}