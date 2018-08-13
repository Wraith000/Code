const Objs = [
    {name : "asd", age : 12},
    {name : "axd", age : 312},
    {name : "bfxv", age : 5412},
    {name : "aasdsd", age : 1212},
]

const Objs1 = Objs.filter((x,i,a)=> x.name.length > 3)
const Objs2 = Objs.filter((x,i,a)=> x.age < 300)

console.log(Objs1)
console.log(Objs2)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
