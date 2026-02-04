const menuItems = [
  { name: "Adobo", price: 50 },
  { name: "Sinigang", price: 60 },
  { name: "Kare-Kare", price: 70 }
];

const menuList = document.getElementById("menuList");

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = ${item.name} - ₱${item.price};
  menuList.appendChild(li);
});