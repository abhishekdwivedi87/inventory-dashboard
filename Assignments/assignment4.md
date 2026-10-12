
---

## 📄 Assignment4.md
```markdown
# Assignment 4: Loop Control Structures

## Problem Statement
Write a `for` loop to print a multiplication table up to 5.  
Use a `while` loop with a `break` statement to find the first number greater than 10 that is divisible by 6.  
Use a `do...while` loop that skips numbers using `continue`.

### Expected Output
-- Multiplication Table of 5 --  
5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
5 x 4 = 20  
5 x 5 = 25  
-- First number > 10 divisible by 6 --  
Found: 12

---

## Solution

```javascript
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
  if (num % 6 === 0) {
    console.log("Found:", num);
    break;
  }
  num++;
}

console.log("-- Do...while loop demo --");
let j = 0;
do {
  j++;
  if (j % 2 === 0) continue;
  console.log("Odd number:", j);
} while (j < 10);
