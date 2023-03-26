/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const orderMap = new Map();
    orderMap.set(undefined, -1)
    for (let i = 0; i < 26; i++)
        orderMap.set(order[i], i);

    const isAdjacentPairSorted = (word1, word2) => {
        for (let i = 0; i < word1.length; i++) {
            if (orderMap.get(word1[i]) < orderMap.get(word2[i]))
                return true;
            else if (orderMap.get(word1[i]) > orderMap.get(word2[i]))
                return false;
        }
        return true;
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!isAdjacentPairSorted(words[i], words[i + 1]))
            return false;
    }
    return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")); // false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false
