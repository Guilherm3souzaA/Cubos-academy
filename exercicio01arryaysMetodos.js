function inverter(string) {
    const stringArray = string.split(``).reverse();
    let novaString = [];
    for (let letras of stringArray) {
        novaString = novaString + letras
    }
    console.log(novaString)
}


inverter('Guilherme Souza');