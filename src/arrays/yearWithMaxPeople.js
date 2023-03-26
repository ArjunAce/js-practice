const yearWithMaxPeople = (people) => {
    const getBirthDeathYearMap = (people) => {
        const map = new Map();

        const addYearToMap = (year, value) => {
            if (!map.has(year)) {
                map.set(year, value);
            } else {
                map.set(year, map.get(year) + value);
            }
        }
        for (const [birthYear, deathYear] of people) {
            addYearToMap(birthYear, 1);
            addYearToMap(deathYear + 1, -1);
        }
        return map;
    }

    const getYearWithMaxPeople = (birthDeathYearMap, sortedBirthDeathYearArray) => {
        let yearWithMaxPeople = -1;
        let peopleAliveCounter = 0, maxPeopleAlive = 0;

        for (const year of sortedBirthDeathYearArray) {
            const value = birthDeathYearMap.get(year);
            peopleAliveCounter += value;
            if (value > 0) {
                if (peopleAliveCounter > maxPeopleAlive) {
                    maxPeopleAlive = peopleAliveCounter;
                    yearWithMaxPeople = year;
                }
            }
        }
        console.log(maxPeopleAlive);
        return yearWithMaxPeople;
    }

    const birthDeathYearMap = getBirthDeathYearMap(people);
    const sortedBirthDeathYearArray = [...birthDeathYearMap.keys()].sort((a, b) => a - b);
    return getYearWithMaxPeople(birthDeathYearMap, sortedBirthDeathYearArray);
}

const people = [
    [1994, 2041],
    [2010, 2098],
    [1801, 1805],
    [2004, 2080],
    [2004, 2092],
    [1970, 2035],
    [1924, 2000],
    [1989, 1989],
    [1942, 2010],
];

console.log(yearWithMaxPeople(people));