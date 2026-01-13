class ListNode {
  data: number;
  next: ListNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class SinglyLinkedList {
  private head: ListNode | null = null;

  // Add node at the end
  append(data: number): void {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Display list in reverse order
  displayReverse(): void {
    this.printReverse(this.head);
    console.log("null");
  }

  // Helper recursive method
  private printReverse(node: ListNode | null): void {
    if (node === null) return;

    this.printReverse(node.next);
    process.stdout.write(node.data + " -> ");
  }
}

// Create list of n nodes
const n: number = 5;
const list = new SinglyLinkedList();

for (let i = 1; i <= n; i++) {
  list.append(i);
}

// Display in reverse order
list.displayReverse();