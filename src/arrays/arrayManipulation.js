const n = 5;
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

const arrayManipulation = (n, queries) => {
    const baseArray = Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        for (let j = query[0] - 1; j < query[1]; j++) {
            baseArray[j] += query[2];
        }
    }
    return Math.max(...baseArray);
}

const arrayManipulationApproach2 = (n, queries) => {
    const baseArray = Array(n + 1).fill(0);
    for (let i = 0; i < queries.length; i++) {
        baseArray[queries[i][0]] += queries[i][2];
        if (queries[i][1] + 1 <= n)
            baseArray[queries[i][1] + 1] -= queries[i][2];
    }
    let sum = 0, max = 0;
    for (let i = 1; i <= n + 1; i++) {
        sum += baseArray[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
console.log(arrayManipulationApproach2(n, queries));