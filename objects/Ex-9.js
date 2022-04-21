// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
   let arr = Object.values(a)
   return(arr.reduce((a,b)=>(a+b)));
}