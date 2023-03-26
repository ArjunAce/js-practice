/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const isPalindrome = (s) => {
        for (let i = 0; i < (s.length - 1) / 2; i++) {
            if (s[i] !== s[s.length - 1 - i])
                return false;
        }
        return true;
    }
    for (let i = 0; i < (s.length - 1) / 2; i++) {
        if (s[i] !== s[s.length - 1 - i])
            return isPalindrome(s.substring(i, s.length - 1 - i)) || isPalindrome(s.substring(i + 1, s.length - i));
    }
    return true;
};



console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abbba"));
console.log(validPalindrome("ebcbbececabbacecbbcbe"));

['b', 'e', 'c', 'e', 'c', 'a', 'b', 'b', 'a', 'c', 'e', 'c', 'b']
// ['e', 'b', 'c', 'b', 'b', 'e', 'c', 'e', 'c', 'a', 'b', 'b', 'a', 'c', 'e', 'c', 'b', 'b', 'c', 'b', 'e']
