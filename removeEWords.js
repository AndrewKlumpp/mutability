function removeEWords(sentence) {
  let newSentence = [];
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!word.includes("e") && !word.includes("E")) {
      newSentence.push(word);
    }
  }
  return newSentence.join(' ');
}



console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
