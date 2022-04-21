// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction(min, max) {
    let arr = [];
    for (i = min; i < max + 1; i++) {
        arr.push(i)
    }

    return console.log(arr);
}