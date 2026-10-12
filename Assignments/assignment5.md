
---

## 📄 Assignment5.md
```markdown
# Assignment 5: Function Architecture and Scope

## Problem Statement
Define a standard function and an arrow function that accept parameters (length and width) with default values to calculate the area of a rectangle.  
Demonstrate function and block scope limits.

### Expected Output
Standard Function Area (Default 5x4): 20  
Arrow Function Area (Custom 10x3): 30  
Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)

---

## Solution

```javascript
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

const arrowArea = (length = 10, width = 3) => length * width;

console.log("Standard Function Area (Default 5x4):", rectangleArea());
console.log("Arrow Function Area (Custom 10x3):", arrowArea());

{
  let blockVar = "Inside block";
  console.log(blockVar);
}
try {
  console.log(blockVar); // ReferenceError
} catch (error) {
  console.log("Scope Test Error:", error.message);
}
