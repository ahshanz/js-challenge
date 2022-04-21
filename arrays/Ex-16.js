// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(a, b) {
    let arr = a.concat(b)
    
    let set = new Set(arr)
    
    let resultArray = Array.from(set)
    
    let sorted = resultArray.sort((a,b)=>a-b)
    
    return sorted
 }