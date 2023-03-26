/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const prefixMap = {
        'I': ['V', 'X'],
        'X': ['L', 'C'],
        'C': ['D', 'M'],
    };
    const arabicValues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let integerResult = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (prefixMap[char] && (s[i + 1] === prefixMap[char][0] || s[i + 1] === prefixMap[char][1])) {
            integerResult += arabicValues[s[i + 1]] - arabicValues[char];
            i++;
        } else
            integerResult += arabicValues[char];
    }
    return integerResult;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994