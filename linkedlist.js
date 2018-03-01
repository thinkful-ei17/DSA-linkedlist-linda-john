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
    //sll.insertBefore('joi','Apollo');
    sll.insertAfter('hi', 'Apollo');
    console.log(sll.find('Apollo'));


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