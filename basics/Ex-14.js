// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(a) {
    const res = (a - Math.floor(a)) !== 0
    return  !res
 }