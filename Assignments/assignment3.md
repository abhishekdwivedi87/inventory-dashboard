
---

## 📄 Assignment3.md
```markdown
# Assignment 3: Conditional Logic Implementation

## Problem Statement
Create a script that evaluates a user's numerical test score using `if...else` statements, determines a letter grade using a `switch` statement, and uses a ternary operator to print whether they passed or failed.

### Expected Output
Score: 85  
Grade: B  
Status: Passed

---

## Solution

```javascript
let score = 85;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "D";

switch (grade) {
  case "A":
    console.log("Grade: A");
    break;
  case "B":
    console.log("Grade: B");
    break;
  case "C":
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: D");
}

let status = score >= 50 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Status:", status);
