// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    const firstTwo = function(array) {
        return drivers.slice(0,2);
    }
    return firstTwo();
}

const returnLastTwoDrivers = () => {
    const lastTwo = function(array) {
        return drivers.slice(2,4);
    }
    return lastTwo();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num1) => {
    const fareMultiplier = (num1) => num1*num1;
    return fareMultiplier;
}

const fareDoubler = (num1) => {
    return num1*2;
} 

const fareTripler = (num1) => {
    return num1*3
}

const selectDifferentDrivers = (drivers, func)  => {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    } else {
        return returnLastTwoDrivers();
    }
}