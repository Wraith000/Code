// First method
let total = 0;
let numbers = [23,123,5341,12,45,4,212,6,123,7]
console.log(`This is the original ${numbers.toString()}`)
for(let i = 0;i < numbers.length;i++)
{
    //debugger
    for (let j = i; j > -1; j--) {
        let master = numbers[j-1]
        if(numbers[j-1] > numbers[j])
        {
            numbers[j-1] = numbers[j];
            numbers[j] = master;
        }
        
    }
console.log(`Current status ${numbers.toString()}`)

}
console.log(`Result ${numbers.toString()}`)