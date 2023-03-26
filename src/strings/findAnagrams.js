/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if (s.length === 0 || p.length === 0 || s.length < p.length)
        return [];
    
        const getCharacterCountMap = (string) => {
            let characterCountMap = new Map();
            for (const char of string) {
                if (characterCountMap.has(char))
                    characterCountMap.set(char, characterCountMap.get(char) + 1);
                else
                    characterCountMap.set(char, 1);
            }
            return characterCountMap;
        };
        let letterOccurrences = getCharacterCountMap(p);
        const result = [];
        let pointer = 0, strlen = p.length;
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            const count = letterOccurrences.get(char);
            if(count === undefined) {
                pointer = i + 1;
                letterOccurrences = getCharacterCountMap(p);
                strlen =  p.length;
            } else if(count > 0) {
                letterOccurrences.set(char, count - 1);
                strlen--;
                if(strlen === 0) {
                    const firstChar = s[pointer];
                    result.push(pointer);
                    pointer++;
                    letterOccurrences.set(firstChar, 1);
                    strlen++;
                }
            } else {
                let duplicateIndex = s.indexOf(char, pointer);
                while(pointer < duplicateIndex) {
                    strlen++;
                    letterOccurrences.set(s[pointer], letterOccurrences.get(s[pointer]) + 1);
                    pointer++;
                }
                pointer = duplicateIndex + 1;
            }
        }
        return result;
};

// console.log(findAnagrams("anagram", "nagaram")); // [0]
// console.log(findAnagrams("t", "tt")); //  []
// console.log(findAnagrams("cacab", "abc")); // [2]
// console.log(findAnagrams("aaaaa", "a")); // [0, 1, 2, 3, 4]
// console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
// console.log(findAnagrams("abab", "ab")); // [0,1,2]
console.log(findAnagrams("abaacbabc", "abc")); // [3,4,6]

