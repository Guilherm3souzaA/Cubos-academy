const textao = 'Eu gosto. Eu vou pra praia. Pode Padar, tudo eu vou pra praia'


let frases = textao.split('.');


let novoArray = []
for (let frase of frases) {
    novoArray.push(frase.trim());
}

console.log(novoArray);


