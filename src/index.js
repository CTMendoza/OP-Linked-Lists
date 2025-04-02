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
        else return this.head
    }
    // returns last node of the list
    last () {
        if(this.head === null) {
            return null
        }

        let current = this.head 
        while(current.nextNode !== null) {
            current = current.nextNode
        
        }
        return current
    }

    //returns node at given index
    at(index) {
        if(this.head === null || index < 0 || index >= this.size() ) {
            return null
        }
        
        let count = 0
        let current = this.head
        while(count < index) {
            current = current.nextNode
            count++
        }
        return current
    }

    //removes last node in the list
    pop() {
        if(this.head.nextNode === null) {
             this.head = null
        }
        let current = this.head
        while(current.nextNode.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = null
    }

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        if(this.head === null) {
            return false
        }
        let current = this.head
        while(current !== null) {
            if(current.value === value) {
                return true
            }
            current = current.nextNode
        }
        return false
    }
    // returns the index of the node containing value, or null if not found.
        find(value) {
            let current = this.head
            let index = 0
            if(current === null) {
                return null
            }

            while(current !== null) {
                if(current.value === value) {
                    return index
                }
                else {
                    current = current.nextNode
                    index++
                }
            }
            return null
        }

        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        toString() {
            let current = this.head
            let listString = ''
            if(current === null) {
                return null
            }

            while(current !== null) {
                listString = listString + `(${current.value}) -> `
                current = current.nextNode
            }
            return listString + '(null)'
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
console.log(JSON.stringify(list, null, 2) );
console.log(`size of the linked list is: ${list.size()}`)
console.log('the first node of the linked list is: ', JSON.stringify(list.firstNode(), null, 2)  )
console.log('the last node of the linked list is: ', JSON.stringify(list.last(), null, 2) )
console.log('the node value  at selected index is: ', JSON.stringify(list.at(2), null, 2))
list.pop()
console.log(JSON.stringify(list, null, 2) );
console.log(`size of the linked list is: ${list.size()}`)
console.log('the first node of the linked list is: ', JSON.stringify(list.firstNode(), null, 2)  )
console.log('the last node of the linked list is: ', JSON.stringify(list.last(), null, 2) )
console.log('the node value  at selected index is: ', JSON.stringify(list.at(2), null, 2))
console.log('Is the passed value inside the linked list: ', list.contains(22))
console.log('The index of the passed value is ', list.find(10))
console.log(list.toString())