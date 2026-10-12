
---

## 📄 Assignment2.md
```markdown
# Assignment 2: Operators, Expressions, and Input Handling

## Problem Statement
Use `prompt()` to capture a user's bill amount and tip percentage.  
Perform explicit type conversion using `Number()`, compute the total using arithmetic and assignment operators, and log a formatted string.

### Expected Output
Subtotal: $100  
Tip Percentage: 15%  
Calculated Tip: $15  
Total Amount to Pay: $115

---

## Solution

```javascript
let billAmount = Number(prompt("Enter bill amount:"));
let tipPercent = Number(prompt("Enter tip percentage:"));

let tipAmount = (billAmount * tipPercent) / 100;
let totalAmount = billAmount + tipAmount;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tipAmount}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
