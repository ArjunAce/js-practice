const flattenArray = (array) => {
    const output = [];
    for (const element of array) {
        if (!Array.isArray(element)) {
            output.push(element);
        } else {
            const flattenedArray = flattenArray(element);
            output.push(...flattenedArray);
        }
    }
    return output;
};
const input = [1, { a: 2, b: 4 }, [4], [5, [6, 7]]];
const output = [1, { a: 2, b: 4 }, 4, 5, 6, 7];
console.log(flattenArray(input));