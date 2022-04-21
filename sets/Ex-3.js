// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function myFunction(a, b) {
    function union(a, b) {
        let unionSet = a;
        for (let i of b) {
            unionSet.add(i);
        }
        return unionSet
    }

    const result = union(a, b);
}