const localizacao = 'Bragança Paulista-SP';

const estado = localizacao.slice(-2);
const end = localizacao.indexOf('-');
const cidade = localizacao.slice(0, end);

console.log(cidade, '-', estado);



