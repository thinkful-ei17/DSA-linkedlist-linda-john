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
        while(temp.next !== found){
            temp = temp.next
        }
        temp.next = new _Node(item,found)

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
    sll.remove('Squirrel')
    sll.insertBefore('joi','Helo')
    console.log(sll.find('Boomer'));

}

main();