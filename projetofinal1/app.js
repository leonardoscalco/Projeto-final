//Definição das variáveis, constantes e dependências necessárias no projeto.

var express = require("express");

var app = express();

var router = express.Router();

var path = __dirname;

const PORT = 8080;

//Direcionamento para o arquivo index.html e servidor

router.get("/", function (req, res) {
    res.sendFile(path + "/web/index.html");
});

app.use(express.static(path));
app.use("/", router);

//Conexão com o servidor

app.listen(PORT, function () {
    console.log(`Projeto grafic listening on port ${PORT}!`)
})