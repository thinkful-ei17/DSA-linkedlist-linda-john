class _Node {
    constructor(value, next) {
        this.value=value,
        this.next=next;
    }
}

class LinkedList {
    constructor() {
            this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item,this.head);
    }
    insertBefore(item,currentNode){
        let found = this.find(currentNode);
        let temp = this.head;
        if(found == temp){
            this.insertFirst(item);
        }
        else {
            while(temp.next !== found){ //keep moving until you find the node we want to insert before
                temp = temp.next
            } //once currentnode is found, next now refers to new node
            temp.next = new _Node(item,found)
        } 
    }

    insertAfter(item,currentNode){
        let found = this.find(currentNode);
        let temp = this.head;
        if(found.next == null){
            this.insertLast(item);
        }
        else {
            while(temp.next !== found.next){ //keep moving until you find the node we want
                temp = temp.next
            } //once currentnode is found, next now refers to new node
         temp.next = new _Node(item, temp.next)
        } 
    }

    insertAt(item, position) {
        let temp = this.head;
        let count = 1;
        while(temp.next !== null){
            count++
            if(count === position){
               return temp.next = new _Node(item, temp.next)
            }
            temp = temp.next
        }
        if(temp.next == null){ //if added to end
            this.insertLast(item);
        }
        if(position === 0){ //if added at start
            this.insertFirst(item);
        }
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        } else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next
            }
            temp.next = new _Node(item,null)
        }
    }
    remove(item){
        if(!this.head){
            return null
        }
        if(this.head === item){
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;

        let prevNode = this.head;

        while((currentNode !== null) && (currentNode.value !== item)){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        if(currentNode === null){
            console.log('item not found');
            return;
        }
        prevNode.next = currentNode.next
    }
    find(item){
        let currentNode = this.head;
        if(!this.head){
            return null
        }
        while(currentNode.value !== item){
            if(currentNode.next === null){
                return null
            } else {
            currentNode = currentNode.next;
            }
        }
        return currentNode;
    }
}

function main(){
    let sll = new LinkedList();
    sll.insertFirst('Starbuck');
    sll.insertFirst('Husker');
    sll.insertFirst('Helo');
    sll.insertFirst('Boomer');
    sll.insertFirst('Apollo');
    sll.insertFirst('Tauhida');
    // sll.remove('Squirrel');
    //sll.insertBefore('joi','Apollo');
    //sll.insertAfter('hi', 'Apollo');
    // sll.insertAt('yo', 4);
    // console.log(sll.find('Boomer'));
    console.log(reverse(sll))

}

function display(sll){
    // console.log(sll.head)
    let currNode = sll.head; 
    console.log(sll.head)
    while (currNode.next !== null) { 
        console.log(currNode.next); 
        currNode = currNode.next; 
    }
}

function size(sll){
    let currNode = sll.head; 
    let count = 1;
    while (currNode.next !== null) { 
        count++; 
        currNode = currNode.next;
    }
    console.log(count);
    return count
}

function isEmpty(sll){
    if(sll.head !== null){
        return 'This is not empty'
    } else {
        return 'The list is empty'
    }
}

function findPrevious(sll,currentnode){
    let found = sll.find(currentnode);
    let temp = sll.head;
    while(temp.next !== found){ 
        temp = temp.next
    }
    if(temp.next === found){
        return temp;
    }
}

function findLast(sll){
    let temp = sll.head;
    while(temp.next !== null){ 
        temp = temp.next
    }
    if(temp.next === null){
        return temp;
    }
}

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// The runtime for algorithm is O(n^2), this is a broken program because it returns undefined/nothing 
function reverse(sll){
    let temp = sll.head;
    let previous = null;
    while(temp.next !== null){
        // console.log('before',temp.next)
        previous = temp;
        temp.next = previous;
        // temp = temp.next;
        console.log(previous)
        // console.log('after',temp)
    }
    // console.log(previous)
    
}

main();

    /*
    Note to Self
    insertAfter('hi', 'Apollo') - insert hi after Apollo
    found = Apollo
    temp = Tauhida (to start, at HEAD of SLL)
    if (checks if Apollo.next is equal to null) (if true we know it is at END of SLL, however in this instance, this is false)
    else (while loop checks if Tauhida.next which is currentluy Apollo is equal to Apollo.next which is currently equal to Boomer)
    Keeps running and we move down the SLL from Tauhida to Apollo
    Once we get to the node that we want to insert after (Apollo = Apollo)
    then we create our new Node, new node takes the data and newNode.next is equal to Apollo.next (old value) which refers to Boomer
    */

    /*
    insertAt(Z, 2)

    SLL = A (1), B (2), C (3)
    after insertion
    similar to insertBefore (shifting down) - A.next now refers to Z
    Z.next which now refers to previous A.next = B

    similar to insertBefore - 
    SLL = A(1), Z (2), B(3), C(4)

    can no longer rely on found node; position only
    keep swimming until position matches count;
    then insert new node as temp (previous node) next and grab what was temp's next as my own new next
    */