/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const getNextLowest = (index) => {
        let temp = index;
        while (temp < prices.length - 1 && prices[temp + 1] <= prices[temp]) {
            temp++;
        }
        return temp === index ? temp : temp;
    }

    const getNextHighest = (index) => {
        let temp = index;
        while (temp < prices.length && prices[temp + 1] >= prices[temp]) {
            temp++;
        }
        return temp === index ? temp : temp;
    }
    let low = 0, high = 0, profit = 0;
    while (high < prices.length) {
        low = getNextLowest(high);
        high = getNextHighest(low);
        if (low === high) {
            low++;
            high++;
        }
        else
            profit += prices[high] - prices[low];
    }
    return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7, 6, 4, 3, 1]));