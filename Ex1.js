const readline = require('readline');

function inverterOrdemPalavras(frase) {
  const palavras = frase.split(' ');
  const palavrasInvertidas = palavras.reverse();
  const fraseInvertida = palavrasInvertidas.join(' ');
  return fraseInvertida;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (fraseOriginal) => {
  const fraseInvertida = inverterOrdemPalavras(fraseOriginal);
  console.log('Frase invertida:', fraseInvertida);
  rl.close();
});
