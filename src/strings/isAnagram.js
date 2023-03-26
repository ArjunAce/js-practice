var isAnagram = function (string1, string2) {
    if (string1.length != string2.length)
        return false;
    if (string1 == string2)
        return true

    const getCharacterCountMap = (string) => {
        let characterCountMap = new Map();
        for (let i = 0; i < string.length; i++) {
            if (characterCountMap.has(string[i]))
                characterCountMap.set(string[i], characterCountMap.get(string[i]) + 1);
            else
                characterCountMap.set(string[i], 1);
        }
        return characterCountMap;
    };
    let string1CharacterCountMap = getCharacterCountMap(string1);
    let string2CharacterCountMap = getCharacterCountMap(string2);
    for (let i = 0; i < string1.length; i++) {
        if (string1CharacterCountMap.get(string1[i]) !== string2CharacterCountMap.get(string1[i]))
            return false;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram")); //  true
console.log(isAnagram("rat", "car")); //  false




var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;

    const createCharacterCountMap = (string) => {
        const characterCountMap = new Map();
        for (const char of string) {
            const count = characterCountMap.has(char) ? characterCountMap.get(char) + 1 : 1;
            characterCountMap.set(char, count);
        }
        return characterCountMap;
    }

    const string1Map = createCharacterCountMap(s);
    const string2Map = createCharacterCountMap(t);

    for (const [key, count] of string1Map.entries()) {
        if (string2Map.get(key) !== count)
            return false;
    }
    return true;
};

console.log(isAnagram("a", "a"));