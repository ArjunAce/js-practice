/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let answer, carry;
    while (b > 0) {
        answer = a ^ b;
        carry = (a & b) << 1;
        a = answer;
        b = carry;
    }
    return answer;
};


console.log(getSum(11, 99)); // Output: 110
console.log(getSum(200, 11)); // Output: 211