function Stack(){

    this.stack = [];
    this.push = function(data){
        this.stack.push(data)
        console.log(this.stack)
    }
    this.pop = function()
    {
        this.stack.pop()
        console.log(this.stack)
    }
    this.peek = function()
    {
        console.log(this.stack[this.stack.length-1]) 
    }
    this.get = function(position){
        if(position <= this.stack.length)
        console.log(this.stack[position])
        else
        console.log('invalid')
    }
}
let MyStack = new Stack();
MyStack.push(213)
MyStack.push(321)
MyStack.push(345)
MyStack.peek()
MyStack.pop()
MyStack.peek()
MyStack.get(5)
MyStack.get(0)