const { cpfs2 } = require('./base');

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação

const cpf = '254.224.877-45';
const cpfRegExp = /^(\d{3}\.)\d{3}\-\d{2}/g
console.log(cpf.match(cpfRegExp));