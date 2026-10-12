# Assignment 1: Variables, Data Types, and Console Operations

## Problem Statement
Declare variables using `var`, `let`, and `const` to store a user's name, age, employment status, and a list of skills.  
Use `typeof` to check each variable's type and log them to the console.

### Expected Output
Name: Alice (Type: string)  
Age: 25 (Type: number)  
Is Employed: true (Type: boolean)  
Skills: ["HTML", "CSS", "JavaScript"] (Type: object)

---

## Solution

```javascript
// Declaring variables
var userName = "Alice";          // string
let userAge = 25;                // number
const isEmployed = true;         // boolean
let skills = ["HTML", "CSS", "JavaScript"]; // object (array)

// Logging values with their types
console.log("Name:", userName, "(Type:", typeof userName + ")");
console.log("Age:", userAge, "(Type:", typeof userAge + ")");
console.log("Is Employed:", isEmployed, "(Type:", typeof isEmployed + ")");
console.log("Skills:", skills, "(Type:", typeof skills + ")");
