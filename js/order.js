let total = 0;

function addOrder() {
  const price = 50; // sample item
  total += price;
  document.getElementById("total").textContent = total;
}