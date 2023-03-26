var myAtoi = function (string) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    string = string.trimLeft();
    let number = 0, i = 0;
    if (string[0] == '+' || string[0] == '-')
        i++;
    for (; i < string.length; i++) {
        if (string[i].match(/[0-9]/gm)) {
            number = number * 10 + parseInt(string[i]);
        } else {
            break;
        }
    }
    if (string[0] == '-' && number > 0)
        return Math.max(-number, MIN_INT);

    return Math.min(number, MAX_INT);
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648