let precos = '1,350,000,00,000000,,,,,';
let novo = '';

for (let preco of precos) {
    novo = novo + preco
    if (preco === ',') {
        novo = novo.replace(',', '.');
    }
}

console.log(novo);