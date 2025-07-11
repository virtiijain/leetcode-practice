function checkRecord(s) {
    let absentCount = 0
    for(i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            absentCount++;
           if(absentCount >= 2) {
            return false;
           }
        }

        if(s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') {
            return false
        }
    }

        return true;
}

// Test case

console.log(checkRecord("LLL"));
console.log(checkRecord("A"));
