import PromptSync = require ('prompt-sync')
const prompt = PromptSync()

const imc = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

console.log('Qual seu peso? ')
const peso = Number(prompt(`-`));

console.log(`Qual sua altura: `)
const altura = Number(prompt(`-`));

const imResultado = imc(peso, altura)
console.log(`Seu IMC é ${imResultado}`)