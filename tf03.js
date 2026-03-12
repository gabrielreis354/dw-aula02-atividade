const notebook = {
    nome: 'Caneta',
    preco: 1.99,
    desconto: 0.1,
    skills: ['JavaScript', 'Python', 'Java']
}

const copia = notebook

const novaCaneta = {...copia}

console.log('--- Comparacao de referencia do objeto ---')

console.log("notebook:", JSON.stringify(notebook))
console.log("copia:", JSON.stringify(copia))
console.log("novaCaneta:", JSON.stringify(novaCaneta))

console.log("notebook === novaCaneta:", notebook === novaCaneta)
console.log("notebook === copia:", notebook === copia)

console.log('--- Acessando as propriedades do objeto ---')

for (let key in notebook) 
{
    if (key === 'skills') {
        console.log('Habilidades:', notebook[key].join(', '))
    } else {
        console.log(`${key}: ${notebook[key]}`)
    }
}

for (let key of novaCaneta.skills) {
    console.log('Habilidade:', key)
}