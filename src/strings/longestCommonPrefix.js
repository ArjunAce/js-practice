const longestCommonPrefix = (strings) => {
    if (!strings[0]) {
        return "";
    }
    let commonPrefix = "";
    let baseString = strings[0];
    for (let i = 0; i < baseString.length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (baseString[i] !== strings[j][i])
                return commonPrefix;
        }
        commonPrefix += baseString[i];
    }
    return commonPrefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix([])); // ""