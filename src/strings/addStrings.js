/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0, result = "";
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        if (num1[num1.length - 1 - i] !== undefined) {
            carry += parseInt(num1[num1.length - 1 - i]);
        }
        if (num2[num2.length - 1 - i] !== undefined) {
            carry += parseInt(num2[num2.length - 1 - i]);
        }
        result = (carry % 10).toString() + result;
        carry = Math.floor(carry / 10);
    }
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;
};


console.log(addStrings("11", "123")); // 134
console.log(addStrings("456", "77")); // 533
console.log(addStrings("0", "0")); // 0