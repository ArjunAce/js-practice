/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const countMap = new Map(), intersection = [];

    for (const number of nums1)
        countMap.set(number, countMap.has(number) ? countMap.get(number) + 1 : 1);

    for (const number of nums2) {
        const count = countMap.get(number);
        if (count && count > 0) {
            countMap.set(number, count - 1);
            intersection.push(number);
        }
    }
    return intersection;
};


var intersectWithSortedArrays = function (nums1, nums2) {
    const intersection = []
    let pointer1 = 0, pointer2 = 0;
    while (true) {
        while (nums1[pointer1] && nums1[pointer1] < nums2[pointer2])
            pointer1++;
        while (nums1[pointer1] && nums1[pointer1] === nums2[pointer2]) {
            intersection.push(nums1[pointer1]);
            pointer1++;
            pointer2++;
        }
        while (nums2[pointer2] && nums1[pointer1] > nums2[pointer2]) {
            pointer2++;
        }
        if (!nums1[pointer1] || !nums2[pointer2])
            break;
    }
    return intersection;
};

// let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
let nums1 = [4, 5, 8], nums2 = [4, 4, 7,8, 9]
console.log(intersectWithSortedArrays(nums1, nums2));