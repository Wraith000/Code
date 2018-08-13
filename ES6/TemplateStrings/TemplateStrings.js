const Mydiv = document.querySelector('.first')

const Stuff = [
    {a : "a" , b : "b"},
    {a : "aa" , b : "bv"},
    {a : "aaa" , b : "bvv"},
    {a : "aaaa" , b : "bvvv"},
]
let mystring = ''
for (let i = 0; i < Stuff.length; i++) {
    let Stuffs = Stuff[i]
    
    mystring += `${Stuffs.a} -- ${Stuffs.b} <br/>`;
    
    
}
Mydiv.insertAdjacentHTML("beforeend",mystring)