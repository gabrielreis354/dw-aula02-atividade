console.log("\n1) Tipos primitivos =======================================\n");

let name = "Gabriel";
let age = 21;
let isStudent = true;
let height = 1.75;
let nullValue = null;
let undefinedValue;
let salario = 93383948n;
let simbolo = Symbol("id");
let simbolo2 = Symbol("id");

console.log(typeof name);           // string
console.log(typeof age);            // number
console.log(typeof isStudent);      // boolean
console.log(typeof height);         // number
console.log(typeof nullValue);      // object (peculiaridade do JavaScript)
console.log(typeof undefinedValue); // undefined
console.log("salario: " + typeof salario);        // bigint
console.log(typeof simbolo);        // symbol
console.log(typeof simbolo2);       // symbol
console.log(simbolo === simbolo2); // false, cada símbolo é único

console.log("\n2) Operadores Matemáticos, lógicos e de comparação ===========================================\n");

console.log("10 + 5 =", 10 + 5); // 15
console.log("10 - 5 =", 10 - 5);
console.log(true&&false); // false
console.log(true||false);
console.log(2 == "2");   // true
console.log(2 === "2");
console.log(2 !== "2");

console.log("\n3) Concatenação e Conversão Dinamica ===========================================\n");

console.log("2" + 2);      // "22"
console.log(2 + (+"2"));   // 4, o operador unário + converte a string "2" para o número 2

console.log("\n4) Escopo e Lexical ===========================================\n");

{
    let localVar = "Variavel let local";
    console.log(localVar);

    const localConst = "Constante local";
    console.log(localConst);

    var localVarGlobal = "Variável var global";
}

console.log(typeof localVar, "undefined, localVar não está acessível fora do bloco");
console.log(typeof localConst, "undefined, localConst não está acessível fora do bloco");
console.log(typeof localVarGlobal, "string, localVarGlobal está acessível fora do bloco");

if (true) {
    var varInIf = "Variável var dentro do if";
}

console.log(typeof varInIf, "string, varInIf está acessível fora do bloco if");

console.log("\n5) Shadowing com const ===========================================\n");

const bloco = "fora"

if (true) {
    console.log("Valor de bloco dentro do if:", bloco); // "fora", acessa a variável do escopo externo

    {
        const bloco = "dentro do bloco interno";
        console.log("Valor de bloco dentro do bloco interno:", bloco); // "dentro do bloco interno", acessa a variável do escopo mais próximo
    }

    console.log("Bloco de fora: ", bloco); // "fora", ainda acessa a variável do escopo externo
}

console.log("\n6) Imutabilidade ===========================================\n");

/*
    Criar uma string, chamar um método que “parece mudar” (ex: toUpperCase) sem reatribuir e imprimir.
    Reatribuir e imprimir o novo valor.
*/
const constante = "Valor Inicial";
console.log(constante.toLowerCase()); // "valor inicial"

constante = "Novo Valor"; // Erro: Assignment to constant variable.
console.log(constante); // "Valor Inicial", a string original não foi alterada


console.log("\n7) Assincronismo com setTimeout ===========================================\n");

console.log("A")

setTimeout(() => {
    console.log("B")
}, 0);

console.log("C")

// Ordem real: A, C, B