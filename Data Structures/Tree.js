//1. One reason to use trees might be because 
//you want to store information that naturally forms a hierarchy.
//2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
//3. Trees provide moderate insertion/deletion
//4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.
function Node(value)
{
    this.data = value;
    this.children = [];
    this.parent = null;
}

function Tree(){
    this.head = null;
    this.depth = 0;
    this.add = function(data)
    {
        if(!this.head)
        {
            this.head = new Node(data)

        }
        else
        {
            let NewNode = new Node(data)
            this.head.children.push(NewNode)
            return NewNode;
        }

    }
    this.addchild = function(ParentNode,data)
    {
        let NewNode = new Node(data)
        ParentNode.children.push(NewNode)
        return NewNode;

    }
   
    this.print = function()
    {
        console.log(this.head.data)
        for(let i = 0; i < this.head.children.length;i++)
        {
            console.log(this.head.children[i].data)
        }
    }
    this.print = function()
    {
        HaveChildren(this.head)
    }
    
    function HaveChildren(Node)
    {
        
   
        if(Node.children.length > 0)
        {
            for(let i = 0; i < Node.children.length ; i++)
            {
                console.log(Node.children[i].data)
                HaveChildren(Node.children[i])  
            }
        }
    }

}

let NewT = new Tree();
let Node1 = NewT.add('q')
let Node2 = NewT.add('w')
let Node3 = NewT.add('e')
let Node4 = NewT.add('r')
let Node5 = NewT.add('t')
let NewNode21 = NewT.addchild(Node2,'zz')
let NewNode22 = NewT.addchild(Node2,'xx')
let NewNode23 = NewT.addchild(Node2,'cc')
let NewNode231 = NewT.addchild(NewNode22,'nnn')
let NewNode2311 = NewT.addchild(NewNode231,'hhhh')
let NewNode2312 = NewT.addchild(NewNode231,'jjjj')
let NewNode23121 = NewT.addchild(NewNode2312,'ccccc')
let Node41 = NewT.addchild(Node4,'11')
let Node411 = NewT.addchild(Node41,'111')
let Node4111 = NewT.addchild(Node411,'1111')
let Node41111 = NewT.addchild(Node4111,'11111')
let Node411111 = NewT.addchild(Node41111,'111112')
NewT.print()