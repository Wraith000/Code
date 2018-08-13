//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


let x = [12, 5, 8, 130, 44].every(x => x >= 10); // false
let y = [12, 54, 18, 130, 44].every(x => x >= 10); // true

console.log(`Every: First array is ${x} and the second array is ${y}`)
// checks if every value passes the test
let q = [12, 5, 8, 130, 44].some(x => x%2 ==0 ); 
let w = [12, 54, 18, 130, 44].some(x => x%12 == 0); 

console.log(`Some: First array is ${q} and the second array is ${w}`)