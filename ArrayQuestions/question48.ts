class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | string {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop()!;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  display(): void {
    console.log(this.items.join(" "));
  }
}

function sortStackDescending(stack: Stack<number>): Stack<number> {
  const tempStack = new Stack<number>();

  while (!stack.isEmpty()) {
    const current = stack.pop() as number;

    while (!tempStack.isEmpty() && (tempStack.peek() as number) > current) {
      stack.push(tempStack.pop() as number);
    }

    tempStack.push(current);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop() as number);
  }

  return stack;
}

const myStack = new Stack<number>();
[1, 4, 3, 2, 5].forEach((num) => myStack.push(num));

console.log("Original Stack (Bottom to Top):");
myStack.display();

sortStackDescending(myStack);

console.log("Sorted Stack Descending (Bottom to Top):");
myStack.display();
