// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr) {
    let avg = arr.reduce((a, b) => (a + b)) / arr.length
    return avg
}