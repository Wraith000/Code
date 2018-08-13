//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find



const objects = [];

  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => find(json))

function find(json)  {
objects.push(json);
console.log(objects);
let findobjs = objects[0].find((x)=> {return x.id == 10}); // acts like first of default in LINQ
let findobjs2 = objects[0].findIndex((x)=> {return x.id == 10}); // gets the index in the array
console.log(`The index is ${findobjs2} and the value is ${findobjs.title}`) 
}
  



  

// const Obj1 = Objs.find((x)=>x.name.length > 4)
// const Obj2 = Objs.find((x)=>x.name.length > 2)
// console.log(Obj1)
// console.log(Obj2)