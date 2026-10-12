
---

## 📄 Assignment6.md
```markdown
# Assignment 6: Arrays, Objects, and Core Methods

## Problem Statement
Create an array of product objects (with name and price properties).  
Use `forEach()` to print each product, `filter()` to find items under a certain price, and `map()` to create an array of formatted name-price strings.

### Expected Output
-- All Products (forEach) --  
Item: Laptop - Price: $800  
Item: Mouse - Price: $25  
Item: Keyboard - Price: $45  
-- Filtered Products (Price < $50) --  
[ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]  
-- Mapped Product Tags (map) --  
[ "LAPTOP costs $800", "MOUSE costs $25", "KEYBOARD costs $45" ]

---

## Solution

```javascript
let products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");
products.forEach(p => console.log(`Item: ${p.name} - Price: $${p.price}`));

let filtered = products.filter(p => p.price < 50);
console.log("-- Filtered Products (Price < $50) --");
console.log(filtered);

let tags = products.map(p => `${p.name.toUpperCase()} costs $${p.price}`);
console.log("-- Mapped Product Tags (map) --");
console.log(tags);
