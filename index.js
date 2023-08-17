"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 7000;
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola Mundo desde el servidor"
    });
});
app.listen(port, function () {
    console.log("Server is running on ".concat(port));
});
