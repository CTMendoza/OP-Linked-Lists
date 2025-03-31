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
    
    //returns the total number of nodes in the linked list
    size() {
        let count = 0
        let current = this.head
        if(this.head === null) {
            return count
        }
        
        while(current !== null) {
            count++
            current = current.nextNode
        }    
        return count
    }
    // returns first node of the list
    firstNode () {
        if(this.head === null) {
            return null
        }
        else return this.head.value
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
list.prepend(50)
list.size()
console.log(JSON.stringify(list, null, 2) );
console.log(`size of the linked list is: ${list.size()}`)
console.log(`the first node of the linked list is: ${list.firstNode()}`)