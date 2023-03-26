/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let x = Math.abs(a), y = Math.abs(b);
    if (x < y) return getSum(b, a);

    const sign = a > 0 ? 1 : -1;

    if (a * b >= 0) {
        while (y != 0) {
            const answer = x ^ y;
            const carry = (x & y) << 1;
            x = answer;
            y = carry;
        }
    } else {
        while (y != 0) {
            const answer = x ^ y;
            const borrow = ((~x) & y) << 1;
            console.log(answer, borrow); // 1, 
            x = answer;
            y = borrow;
        }
    }
    return x * sign;
}

console.log(getSum(3, -2));