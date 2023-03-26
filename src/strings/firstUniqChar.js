var firstUniqChar = function (string) {
    let characterCountMap = new Map();
    for (let i = 0; i < string.length; i++) {
        if (characterCountMap.has(string[i]))
            characterCountMap.set(string[i], characterCountMap.get(string[i]) + 1);
        else
            characterCountMap.set(string[i], 1);
    }
    for (let i = 0; i < string.length; i++) {
        if (characterCountMap.get(string[i]) === 1)
            return i;
    }
    return -1;
};

console.log(firstUniqChar("leetcode")); //  0
console.log(firstUniqChar("loveleetcode")); //  2


var firstUniqCharRetry = function (s) {
    const repeatedSet = new Set();
    const uniqueChars = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!repeatedSet.has(char)) {
            if (uniqueChars.has(char)) {
                uniqueChars.delete(char);
                repeatedSet.add(char)
            } else
                uniqueChars.set(char, i);
        }
    }

    const firstKey = uniqueChars.keys().next().value;
    return firstKey ? uniqueChars.get(firstKey) : -1;

};