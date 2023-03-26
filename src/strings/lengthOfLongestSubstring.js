/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestSubsequenceLength = 0, counter = 0, currentStart = 0;
    const charToIndexMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charToIndexMap.has(char) && charToIndexMap.get(char) >= currentStart) {
            const duplicateIndex = charToIndexMap.get(char);
            longestSubsequenceLength = Math.max(counter, longestSubsequenceLength);
            counter = i - duplicateIndex;
            currentStart = duplicateIndex + 1;
            charToIndexMap.set(char, i);
        } else {
            charToIndexMap.set(char, i);
            counter++;
        }
    }
    return Math.max(counter, longestSubsequenceLength);
};


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("tmmzuxt")); // 5
console.log(lengthOfLongestSubstring("bbtablud")); // 6
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("a")); // 1
console.log(lengthOfLongestSubstring("aa")); // 1
console.log(lengthOfLongestSubstring("a a")); // 2