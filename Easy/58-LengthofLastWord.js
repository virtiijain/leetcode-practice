let s = "Hello World"

function lengthOfLastWord(str) {
    let words = str.trim().split(" ")
    let lastWord = words[words.length - 1]
    return lastWord.length;
}

// Test Case 1
console.log(lengthOfLastWord("Hello World"));  

// Test Case 2
console.log(lengthOfLastWord("   fly me   to   the moon  "));  

// Test Case 3
console.log(lengthOfLastWord("luffy is still joyboy"));  
