// Why Linked List?
// 1) The size of the arrays is fixed
// 2) Inserting a new element in an array of elements is expensive

//Advantages over arrays
//1) Random access is not allowed.
//2) Extra memory space for a pointer

function Node(data)
{
    this.value = data;
    this.next = null;
}

function LinkedList()
{
    this.head = null;
    
    this.add = function(data)
    {
        var NewNode = new Node(data);
        AddtoList.call(this,NewNode) 

    }
    function AddtoList(data)
    {
       
            if(!this.head)
            {
                this.head = data;
                console.log(this)
            }
            else
            {
                CurrentNode = this.head;
                while(CurrentNode.next)
                {
                    CurrentNode = CurrentNode.next;
                }

                CurrentNode.next = data;
                console.log(this)
            }

    }

    this.get = function(position)
    {
        let current = 0;
        let CurrentNode = this.head;
        
        while(current < position)
        {
            
            if(CurrentNode.next)
            {
                CurrentNode = CurrentNode.next;
                current++;
            }
            else
            {
                console.log('Does not exist')
                break;
            }
            
        }
        if(current == position)
        console.log(CurrentNode.value)


    }

    this.delete = function(position)
    {
        let currentNode = this.head;
        let current = 0;
        let PrevNode = null;
        if(position == 0)
        {
            this.head = CurrentNode.Next;
            console.log(this)
        }
        while(current < position)
        {
            if(currentNode.next)
            {
                PrevNode = currentNode;
                currentNode = currentNode.next
                current++
            }
            else
            {
                console.log('node does not exist')
                break;
            }
            
        }
        if(current == position)
        {
            PrevNode.next = currentNode.next
            console.log(this)
        }
        

    }
}

var NewList = new LinkedList();

NewList.add(1111)
NewList.add(222)
NewList.add(33)

NewList.get(1)
NewList.get(5)
NewList.delete(1)

// Circular Linked Lists
// Doubly Linked Lists
