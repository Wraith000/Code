// First method
let total = 0;
let numbers = [23,123,5341,12,45,4,212,6,123,7]
console.log(`This is the original ${numbers.toString()}`)
let lengthCheck = numbers.length;
let Minimum = 0;
while(Minimum <lengthCheck)
{
    
    let MinCheck = numbers[Minimum];
    let MinIndex = Minimum;
    for (let i = Minimum; i < numbers.length; i++) {
        
        if(numbers[i] < MinCheck)
        {
            MinCheck = numbers[i];
            MinIndex = i;
        }
        
        
    }

    debugger
    numbers[MinIndex] =  numbers[Minimum]
    numbers[Minimum] = MinCheck;
    Minimum++;
    
    console.log(`Current status ${numbers.toString()}`)

}

console.log(`Result ${numbers.toString()}`)