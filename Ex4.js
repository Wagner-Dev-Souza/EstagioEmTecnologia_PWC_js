function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function capitalizeFirstLetterOfEachSentence(string) {
    const sentences = string.split(/([.?!]\s+)/);
    const capitalizedSentences = sentences.map((sentence) => {
        return capitalizeFirstLetter(sentence);
    });
    const capitalizedString = capitalizedSentences.join('');
    return capitalizedString;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question('Digite uma string: ', (string) => {
    const capitalizedString = capitalizeFirstLetterOfEachSentence(string);
    console.log('String com primeira letra de cada frase em maiúsculo:', capitalizedString);
    rl.close();
  });
  