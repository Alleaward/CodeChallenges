function centuryFromYear(year) {
    var yearToCheck = year / 100;
    if (year % 100 === 0) {
        console.log(yearToCheck);
        return yearToCheck;
    } else {
        console.log(yearToCheck + 1);
        return Math.floor(yearToCheck) + 1;
    }
}
