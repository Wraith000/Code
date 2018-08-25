function Queue()
{
    this.Queue = [];
    this.add = function(Data) {   this.Queue.unshift(Data)   }
    this.remove = function() {   this.Queue.pop()   }
    this.find = function(data) {  if(data <= this.Queue.length) 
                                    {   console.log(this.Queue[data])   } 
                                  else console.log('invalid')  
                                }


}
let MyQ = new Queue();
MyQ.add('asdasd')
MyQ.add('dfsdf')
MyQ.add('as')
MyQ.add(123)
console.log(MyQ)
MyQ.remove()
console.log(MyQ)
MyQ.find(0)
MyQ.find(4)
