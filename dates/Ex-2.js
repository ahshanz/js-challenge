// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
    var difTime = a.getTime() - b.getTime();
    if (difTime < 0) {
        difTime = difTime * -1;
    }

    var difDays = difTime / (1000 * 3600 * 24);

    return difDays
}
