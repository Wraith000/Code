const MyArray = [1,2,3,4,5,6,7]
const MyArray2 = [];

MyArray.forEach((v,i,a) =>MyArray2.push(v*2))
console.log(MyArray2)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const Objs = [
    {name : "asd", age : 12},
    {name : "axd", age : 312},
    {name : "bfxv", age : 5412},
    {name : "aasdsd", age : 1212},
]
const Objs2 = [];

Objs.forEach(function(v,i,a){
    Objs2.push(v.name)
})
console.log(Objs2)