let totalSales = 0;

orders.forEach(order => {
  totalSales += order.price;
});

document.getElementById("orderCount").textContent = orders.length;
document.getElementById("salesTotal").textContent = totalSales;
