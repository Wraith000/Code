var divs1 = document.getElementsByClassName('first')
var divs2 = document.getElementsByClassName('second')
console.log(divs1)
console.log(divs2)

for (var i = 0; i < divs1.length; i++) {
    divs1[i].addEventListener('click',function(){
        console.log('This is element ' + i)
    })
    
}

for (let i = 0; i < divs2.length; i++) {
    divs2[i].addEventListener('click',function(){
        console.log('This is element ' + i+i)
    })
    
}

// Let creates it's own scope - var doesn't do that

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let