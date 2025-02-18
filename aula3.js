const { texto, arquivos } = require('./base').default;

// * (opcional) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcional) 0 ou 1
// \ Caractere de escape

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.jpg/g

for (const arquivo of arquivos) {
    console.log(arquivo.match(regExp2));
}