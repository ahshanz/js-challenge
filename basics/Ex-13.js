// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function myFunction(a, b) {
    count = 0;
    for (i = 0; i < a.length; i++) {

        if (a[i] === b) {
            count = count + 1
        }
    }

    return console.log(count);
}

