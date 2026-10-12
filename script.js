// Initial Inventory
let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

let budgetLimit = 50;
let standardLimit = 300;

function categorize(price) {
  if (price < budgetLimit) return "Budget";
  else if (price < standardLimit) return "Standard";
  else return "Premium";
}

// Badge styling
function badge(category) {
  if (category === "Budget") return `<span class="badge budget">${category}</span>`;
  if (category === "Standard") return `<span class="badge standard">${category}</span>`;
  return `<span class="badge premium">${category}</span>`;
}

// Analytics helpers
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
const applyTax = (amount, taxRate = 0.18) => amount + (amount * taxRate);
const applyDiscount = (amount, discountRate = 0.1) => amount - (amount * discountRate);
function calculateAverage(items) {
  return calculateTotal(items) / items.length;
}
function findHighest(items) {
  return items.reduce((max, item) => item.price > max.price ? item : max, items[0]);
}
function findLowest(items) {
  return items.reduce((min, item) => item.price < min.price ? item : min, items[0]);
}
function categoryCounts(items) {
  let counts = { Budget: 0, Standard: 0, Premium: 0 };
  items.forEach(item => counts[categorize(item.price)]++);
  return counts;
}

// Add product from form
function addProduct() {
  let productName = document.getElementById("productName").value;
  let productPrice = Number(document.getElementById("productPrice").value);

  if (productName && !isNaN(productPrice) && productPrice > 0) {
    inventory.push({ name: productName, price: productPrice });
    displayInventory();
  } else {
    alert("Invalid input. Please try again.");
  }
}

// Update thresholds
function updateThresholds() {
  budgetLimit = Number(document.getElementById("budgetLimit").value) || budgetLimit;
  standardLimit = Number(document.getElementById("standardLimit").value) || standardLimit;
  displayInventory();
}

// Display inventory + analytics
function displayInventory() {
  // Inventory Table
  let inventoryBody = document.querySelector("#inventoryTable tbody");
  inventoryBody.innerHTML = "";
  inventory.forEach(item => {
    let row = `<tr>
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td>${badge(categorize(item.price))}</td>
    </tr>`;
    inventoryBody.innerHTML += row;
  });

  // Analytics Table
  let totalValue = calculateTotal(inventory);
  let totalWithTax = applyTax(totalValue);
  let totalWithDiscount = applyDiscount(totalValue);
  let avgPrice = calculateAverage(inventory);
  let highest = findHighest(inventory);
  let lowest = findLowest(inventory);
  let counts = categoryCounts(inventory);

  let analyticsBody = document.querySelector("#analyticsTable tbody");
  analyticsBody.innerHTML = `
    <tr><td>Total Inventory Value</td><td>$${totalValue}</td></tr>
    <tr><td>Total with Tax (18%)</td><td>$${totalWithTax}</td></tr>
    <tr><td>Total with Discount (10%)</td><td>$${totalWithDiscount}</td></tr>
    <tr><td>Average Price</td><td>$${avgPrice.toFixed(2)}</td></tr>
    <tr><td>Highest Priced Product</td><td>${highest.name} ($${highest.price})</td></tr>
    <tr><td>Lowest Priced Product</td><td>${lowest.name} ($${lowest.price})</td></tr>
    <tr><td>Category Counts</td><td>Budget=${counts.Budget}, Standard=${counts.Standard}, Premium=${counts.Premium}</td></tr>
  `;

  // Render charts
  renderCharts();
}

// Charts
let categoryChart, priceChart;
function renderCharts() {
  let counts = categoryCounts(inventory);

  // Category Pie Chart
  const categoryData = {
    labels: ["Budget", "Standard", "Premium"],
    datasets: [{
      data: [counts.Budget, counts.Standard, counts.Premium],
      backgroundColor: ["#27ae60", "#f39c12", "#e74c3c"]
    }]
  };

  if (categoryChart) categoryChart.destroy();
  categoryChart = new Chart(document.getElementById("categoryChart"), {
    type: "pie",
    data: categoryData
  });

  // Price Bar Chart
  const priceData = {
    labels: inventory.map(item => item.name),
    datasets: [{
      label: "Product Prices",
      data: inventory.map(item => item.price),
      backgroundColor: "#3498db"
    }]
  };

  if (priceChart) priceChart.destroy();
  priceChart = new Chart(document.getElementById("priceChart"), {
    type: "bar",
    data: priceData,
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// Show initial inventory when page loads
window.onload = displayInventory;
