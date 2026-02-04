const select = document.getElementById("foodSelect");
const list = document.getElementById("orderList");
const totalText = document.getElementById("total");

let total = 0;

// Populate dropdown
menuItems.forEach(item => {
  select.innerHTML += `
    <option value="${item.id}">
      ${item.name} - ₱${item.price}
    </option>
  `;
});

// Load existing orders (important!)
orders.forEach(item => {
  total += item.price;
  list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
      ${item.name}
      <span>₱${item.price}</span>
    </li>
  `;
});
totalText.textContent = total;

function addOrder() {
  const item = menuItems.find(m => m.id == select.value);

  orders.push(item);
  saveOrders(); // ✅ persist order

  total += item.price;

  list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
      ${item.name}
      <span>₱${item.price}</span>
    </li>
  `;

  totalText.textContent = total;
}