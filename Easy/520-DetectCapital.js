let detectCapitalUse = (word) => {
    if(
      word === word.toUpperCase() || 
      word === word.toLowerCase() ||
      word[0] === word[0].toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase()
      ) {
        return true
    } else {
        return false
    }
}

// Teast case
console.log(detectCapitalUse("USA"));      
console.log(detectCapitalUse("leetcode")); 
console.log(detectCapitalUse("Google"));  
console.log(detectCapitalUse("FlaG"));