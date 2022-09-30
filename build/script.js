"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
console.log('Qual seu peso? ');
var peso = Number(prompt("-"));
console.log("Qual sua altura: ");
var altura = Number(prompt("-"));
var imResultado = imc(peso, altura);
console.log("Seu IMC \u00E9 ".concat(imResultado));
