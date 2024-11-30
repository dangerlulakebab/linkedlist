import Node from './node.js';

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
        current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    getHead() {
        return this.head
    }

    getTail() {
        let current = this.head;
        while (current !== null && current.next !== null){
            current = current.next
        }
        return current
    }

    at(index) {
        if (index < 0 || index >= this.size()) {
            return null
        }

        let count = 0;
        let current = this.head;

        while (count !== index){
            count++
            current = current.next
        }
        return current
    }

    pop() {
        if (this.head === null) {
            return 
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head
        while (current.next && current.next.next !== null) {
            current = current.next
        }

        current.next = null
    }

    contains(value) {
        if (this.head === null) {
            return false;
        }

        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return true
            }
            current = current.next
        }
        return false
    }

    find(value) {
        if (this.head === null) {
            return null
        }

        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (current.data === value) {
                return count
            }
            count++;
            current = current.next
        }
        return null
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            return null;
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode
        } else {
            let current = this.head;
            let count = 0;

            while (count < index - 1) {
                count++;
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next;
            return
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++
        }
        previous.next = current.next;
    }

    toString() {
        let result = ''
        let current = this.head;
        while (current !== null) {
            result += `( ${current.data} ) -> `;
            current = current.next;
        }
        result += 'null';
        return result;
    }
}

export default LinkedList;