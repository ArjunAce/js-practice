const digits = [9, 9];

var plusOne = function (digits) {
    let index = digits.length - 1;
    while (index >= 0) {
        if (digits[index] < 9) {
            digits[index] = ++digits[index];
            break;
        } else {
            digits[index] = 0;
            index--;
        }
    }
    if (index === -1) {
        digits.unshift(1);
    }
    return digits;
};

plusOne = function (digits) {
    let i = digits.length - 1;

    digits[i] += 1;

    while (digits[i] === 10) {
        digits[i--] = 0;
        if (i > -1)
            digits[i] += 1;
        else
            digits.unshift(1);
    }
    return digits;
};

console.log(plusOne(digits));

plusOne = function (digits) {
    let i = digits.length - 1;

    while (digits[i] === 9)
        digits[i--] = 0;

    if (i > -1)
        digits[i]++;
    else
        digits.unshift(1);

    return digits;
};

console.log(plusOne([0]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));
