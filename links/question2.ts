// Write a JavaScript program to convert a Doubly Linked lists into an array and returns it.

class DoublyNode {
  data: number;
  prev: DoublyNode | null = null;
  next: DoublyNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class DoublyLinkedList {
  private head: DoublyNode | null = null;
  private tail: DoublyNode | null = null;

  append(data: number): void {
    const newNode = new DoublyNode(data);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  toArray(): number[] {
    const result: number[] = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

const array = list.toArray();
console.log(array);
