  function isAnagramPalindrome(string) {
    const charCounts = {};
    let oddCount = 0;
  
    // Contagem de ocorrências de cada caractere na string
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    // Verificação de quantos caracteres têm uma contagem ímpar
    for (let count of Object.values(charCounts)) {
      if (count % 2 !== 0) {
        oddCount++;
      }
    }
  
    // Se tiver mais de um caractere com contagem ímpar, não é palíndromo
    if (oddCount > 1) {
      return {
        isPalindrome: false,
        palindrome: null
      };
    }
  
    // Construção do palíndromo a partir do caracter com contagem ímpar
    let palindrome = '';
    let oddChar = '';
    for (let [char, count] of Object.entries(charCounts)) {
      if (count % 2 !== 0) {
        oddChar = char;
      }
      palindrome += char.repeat(Math.floor(count / 2));
    }
  
    palindrome += oddChar + palindrome.split('').reverse().join('');
  
    return {
      isPalindrome: true,
      palindrome: palindrome
    };
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma string: ', (string) => {
    const result = isAnagramPalindrome(string);
    console.log('É um anagrama de um palíndromo:', result.isPalindrome);
    if (result.isPalindrome) {
      console.log('Palíndromo encontrado:', result.palindrome);
    }
    rl.close();
  });
  