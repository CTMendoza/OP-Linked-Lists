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
console.log(JSON.stringify(list, null, 2));