function daysOfMounth(month,year){



// Create a Date object for the first day of the next month
let nextMonthDate = new Date(year, month, 1);

// Subtract one day to get the last day of the current month
let lastDayOfCurrentMonth = new Date(nextMonthDate - 1);

// Get the day of the month, which gives the number of days in the current month
return lastDayOfCurrentMonth.getDate();



}



console.log(daysOfMounth(1, 2012));
console.log(daysOfMounth(2, 2021));