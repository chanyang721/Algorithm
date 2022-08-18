class LinkedListNode {
    constructor (value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {

    constructor(compareFunction) {
        this.head = null;
        this.tail = null;
    }


    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        if (this.head) {
            this.head.previous = newNode;
        }
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this
        }

        this.tail.next = newNode; 
        this.tail = newNode;

        return this
    }

    insert (value, rawIndex) {
        const idx = rawIndex < 0 ? 0 : rawIndex;

        if (index === 0) {
            this.prepend(value)
        }
        else {
            let count = 1;
            let currentNode = new LinkedListNode(value);

            while (currentNode) {
                if (count === index) break;

                currentNode = currentNode.next;
                count += 1;
            }

            if (currnetNode) {
                newNode.next = currentNode.next;
                currnetNode.next = newNode;
            }
            else {
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                }
                else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }

        return this
    }

    

}