// First method
let total = 0;
let numbers = [23,123,5341,12,45,4,212,6,123,7]
console.log(`This is the original ${numbers.toString()}`)
for (let q = 0; q < numbers.length; q++) {
    {
        for (let i = 1; i< numbers.length; i++) {
        
            if(numbers[i-1] > numbers[i])
            {
                var temp = numbers[i]
                numbers[i] = numbers[i-1]
                numbers[i-1] = temp;
            }            
          }
          total++;
          console.log(`This is pass # ${total}`)
          console.log(`This is the result ${numbers.toString()}`)
    }
}

// Second Method
let total = 0;
let numbers2 = [23,123,5341,12,45,4,212,6,123,7]
console.log(`This is the original ${numbers2.toString()}`)
let swap;
do
    {
         swap = false;
for (let q = 1; q < numbers2.length; q++) {
    
    
    {
            if(numbers2[q-1] > numbers2[q])
            {
                var temp = numbers2[q]
                numbers2[q] = numbers2[q-1]
                numbers2[q-1] = temp;
                swap = true;
            }          
          
    }
    
}
total++;
console.log(`This is pass # ${total}`)
console.log(`This is the result ${numbers2.toString()}`)
}while(swap)
