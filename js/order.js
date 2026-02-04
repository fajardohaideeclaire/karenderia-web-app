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

// Function to render orders
function renderOrders() {
  list.innerHTML = '';
  total = 0;
  
  orders.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.name}</span>
        <div>
          <span class="me-3">₱${item.price}</span>
          <button class="btn btn-danger btn-sm" onclick="deleteOrder(${index})">Delete</button>
        </div>
      </li>
    `;
  });
  
  totalText.textContent = total;
}

// Load existing orders on page load
renderOrders();

function addOrder() {
  const item = menuItems.find(m => m.id == select.value);
  
  if (!item) return;

  orders.push(item);
  saveOrders(); // ✅ persist order
  renderOrders();
}

function deleteOrder(index) {
  orders.splice(index, 1);
  saveOrders(); // ✅ persist changes
  renderOrders();
}

function clearOrder() {
  if (orders.length === 0) {
    alert('No orders to clear');
    return;
  }
  
  if (confirm('Are you sure you want to clear all orders?')) {
    orders = [];
    saveOrders(); // ✅ persist changes
    renderOrders();
  }
}