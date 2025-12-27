//A staircase consists of N steps, and you are given the choice of climbing one step at a time or two steps at a time.
// Write a JavaScript program to find distinct ways to climb the staircase.

const climbStairs = (n: number) => {
  if (n <= 0) return 0;
  if (n <= 1) return 1;
  if (n <= 2) return 2;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(climbStairs(10));
