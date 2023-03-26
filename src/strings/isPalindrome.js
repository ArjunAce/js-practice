var isPalindrome = function (string) {
    string = string.toLowerCase();
    let characters = [...string].filter(x => x.match(/[0-9a-z]/g));
    for (let i = 0; i < characters.length / 2; i++) {
        if (characters[i] !== characters[characters.length - 1 - i])
            return false;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false