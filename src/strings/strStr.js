var strStr = function (haystack, needle) {
    if (needle == "") {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    const subStringPresent = (i) => {
        for (let j = 1; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j])
                return false;
        }
        return true;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] == needle[0] && subStringPresent(i))
            return i;
    }
    return -1;
};

console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0