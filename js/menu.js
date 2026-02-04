const table = document.getElementById("menuTable");

menuItems.forEach(item => {
  table.innerHTML += `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>₱${item.price}</td>
    </tr>
  `;
});
