export function capitalize(word) {
    if (word.length === 0) {
      return word;
    }
  
    const firstChar = word[0].toUpperCase();
    const restOfString = word.slice(1);
  
    return firstChar + restOfString;
}
  
export function concatenate(str1, str2) {
    return str1 + ' ' + str2;
}
  
export function getSecondWord(str) {
    const words = str.split(' ');
    if (words.length >= 2) {
      return words[1];
    }
    return '';
}
