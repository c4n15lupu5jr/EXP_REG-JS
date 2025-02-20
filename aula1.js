// g - global (encontra todas as ocorrências)
// i - insensitive (ignora maiúsculas e minúsculas)
// () - define um grupo
// | - ou

import { texto } from './base';

const regExp1 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
