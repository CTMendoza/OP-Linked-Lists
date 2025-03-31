// create LinkedList class
class LinkedList {
    constructor() {
       this.head = null;
    }

    append(value) {
        // create a new Node
        const newNode = new Node (value);
        // if head is null set head to newNode 
        if(this.head === null) {
            this.head = newNode;
            return
        }
        // traverse to the last Node
        let current = this.head
        while(current.nextNode !== null) {
            current = current.nextNode
        }

        // attach the new node to the last node
        current.nextNode = newNode;
    }

    prepend(value) {
        // create a new Node
        const newNode = new Node (value);
        // if head is null set head to newNode 
        if(this.head === null) {
            this.head = newNode;
            return
        }

        //if this.head is not null assign this.head to newNode.nextNode THEN assign newNode to this.head
        if(this.head !==null) {
            newNode.nextNode = this.head
            this.head = newNode
            return
        }


    }
}
// create Node class
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.prepend(40)
list.prepend(50)
console.log(JSON.stringify(list, null, 2));