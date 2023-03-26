/** https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}

addBinary = function (a, b) {
    const length = a.length >= b.length ? a.length : b.length;
    let temp = 0, result = "";

    for (let i = 0; i < length; i++) {
        if (a[a.length - 1 - i] === "1")
            temp++;
        if (b[b.length - 1 - i] === "1")
            temp++;

        if (temp < 2) {
            result = temp.toString() + result;
            temp = 0;
        } else {
            result = (temp - 2).toString() + result;
            temp = 1;
        }
    }
    if (temp)
        result = "1" + result;

    return result;
}

addBinary = function (a, b) {
    let x = parseInt(a, 2), y = parseInt(b, 2);
    while (y !== 0) {
        const answer = x ^ y;
        const carry = (x & y) << 1;
        x = answer;
        y = carry;
    }
    return x.toString(2);
}

console.log(addBinary("1", "11")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"