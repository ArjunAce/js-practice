let arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];
arr = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];
const getHourGlassCenters = () => {
    const hourGlassCenters = [];
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            hourGlassCenters.push({ i, j });
        }
    }
    return hourGlassCenters;
}

const getHourGlassSum = (center) => {
    let hourGlassSum = arr[center.i][center.j];
    for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
        if (rowOffset === 0) continue;
        for (let colOffset = -1; colOffset < 2; colOffset++) {
            hourGlassSum += arr[center.i + rowOffset][center.j + colOffset];
        }
    }
    return hourGlassSum;
}

const getMaxHourGlassSum = () => {
    hourGlassCenters = getHourGlassCenters();
    let maxHourGlassSum = -100;
    hourGlassCenters.forEach((hourGlassCenter) => {
        maxHourGlassSum = Math.max(maxHourGlassSum, getHourGlassSum(hourGlassCenter));
    });
    return maxHourGlassSum;
}

console.log(getMaxHourGlassSum());