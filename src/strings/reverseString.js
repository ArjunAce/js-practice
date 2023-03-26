var reverseString = function (s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
};

reverseString('abcdef'.split(''));