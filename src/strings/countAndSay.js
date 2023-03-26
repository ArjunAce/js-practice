const say = (number) => {
    let newNumber = '';
    let i = 0;
    while (i < number.length) {
        let count = 1;
        while (number[i] == number[i + 1]) {
            count++;
            i++;
        }
        newNumber += count + number[i];
        i++;
    }
    return newNumber;
}

const countAndSay = (n) => {
    if (n == 1) return "1";
    return say(countAndSay(n - 1));
}

console.log(countAndSay(1)); // "1"
console.log(countAndSay(2)); // "11"
console.log(countAndSay(3)); // "21"
console.log(countAndSay(4)); // "1211"