const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        { 
            title: "D",
            message: "esenvolvedor aplicações/serviços de forma fácil"
        },
        { 
            title: "E",
            message: "JS usa javascript para renderizar HTML"
        },
        { 
            title: "M",
            message: "uito fácil de usar"
        },
        { 
            title: "A",
            message: "morzinho"
        },
        { 
            title: "I",
            message: "Install EJS"
        },
        { 
            title: "S",
            message: "intaxe simples"
        },
    ];
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando")