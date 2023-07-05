function isPalindromo(string) {
    const reversed = string.split('').reverse().join('');
    return string === reversed;
  }
  
  function encontrarPalindromoMaisLongo(string) {
    let palindromoMaisLongo = '';
  
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j <= string.length; j++) {
        const substr = string.substring(i, j);
        if (isPalindromo(substr) && substr.length > palindromoMaisLongo.length) {
          palindromoMaisLongo = substr;
        }
      }
    }
  
    return palindromoMaisLongo;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma string: ', (string) => {
    const palindromoMaisLongo = encontrarPalindromoMaisLongo(string);
    console.log('Palíndromo mais longo encontrado:', palindromoMaisLongo);
    rl.close();
  });
  