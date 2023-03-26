/**
 * https://leetcode.com/problems/first-bad-version/
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 0, high = n, firstBadVersion = n, mid;
        while (low <= high) {
            mid = Math.ceil((low + high) / 2);
            console.log({mid});
            if (isBadVersion(mid)) {
                firstBadVersion = mid;
                high = mid - 1;
            } else
                low = mid + 1;
        }
        return firstBadVersion;
    };
};
const isBadVersion = (num) => num >= 1;

console.log(solution(isBadVersion)(1));