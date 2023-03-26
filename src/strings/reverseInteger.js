var reverseInteger = function (number) {
    const MAX_INT = Math.pow(2, 31) - 1; // 2147483648 - 1
    const MIN_INT = -MAX_INT - 1;
    let multiplier = -1;
    if (number < 0) {
        number = -number;
    } else {
        multiplier = 1;
    }
    let reverse = 0;
    while (number > 0) {
        const temp = number % 10;
        number = Math.floor(number / 10);
        reverse = reverse * 10 + temp;
    }
    reverse *= multiplier;
    return reverse < MIN_INT || reverse > MAX_INT ? 0 : reverse;
};

// console.log(reverseInteger(123)); //  321
// console.log(reverseInteger(-123)); //  -321
// console.log(reverseInteger(120)); //  21
// console.log(reverseInteger(0)); //  0
console.log(reverseInteger(1534236469)); //  0

// 2147483648