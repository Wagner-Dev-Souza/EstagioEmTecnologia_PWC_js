const readline = require('readline');

function removerCaracteresDuplicados(string) {
  const caracteres = string.split('');
  const caracteresUnicos = [...new Set(caracteres)];
  const stringSemDuplicados = caracteresUnicos.join('');
  return stringSemDuplicados;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string: ', (stringOriginal) => {
  const stringSemDuplicados = removerCaracteresDuplicados(stringOriginal);
  console.log('String sem caracteres duplicados:', stringSemDuplicados);
  rl.close();
});
