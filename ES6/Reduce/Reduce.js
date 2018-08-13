//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(json=>Reducer(json))

function Reducer(data){
console.log(data.reduce(
    (accumulator, currentValue, currentIndex, array)=> 
    {return accumulator,0})
)}