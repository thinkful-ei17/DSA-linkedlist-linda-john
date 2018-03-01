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
        while(temp.next !== found){ //keep moving until you find the node we want to insert before
            temp = temp.next
        } //once currentnode is found, next now refers to new node
        temp.next = new _Node(item,found)

    }

    insertAfter(item,currentNode){
        let found = this.find(currentNode); //find current node
        let temp = this.head;
        while(temp !== null){ 
            console.log('in while loop', temp.next);
            if (found){ //once at currentNode
                console.log('in if stmt');
                temp.next = new _Node(item, temp.next); //create new Node after current Node
                return; //must return to stop loop
            }
        }
        temp=temp.next // tells while loop to keep going through linked list 
        console.log('what is temp');

    } //once currentnode is found, 
        

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
    sll.remove('Squirrel');
    sll.insertBefore('joi','Helo');
    sll.insertAfter('hi', 'Helo');
    console.log(sll.find('Tauhida'));


}

main();