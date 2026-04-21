/**
 * index.js
 *
 * handles logic for index.html.
 *
 * author: christopher romo
 * created: 2026-04-20
 */

async function fillList() {
  // fills the orders-list on index.html.

  const res = await fetch("/orders");
  const orders = await res.json();

  const ordersList = document.getElementById("orders-list");

  if (orders.length === 0) {
    const message = document.createElement("p");
    message.textContent = "no orders yet...";
    ordersList.append(message);
    return;
  }

  orders.forEach((order) => {
    const orderItem = document.createElement("div");
    orderItem.classList.add("order-item");

    const header = document.createElement("p");
    header.textContent = `${order.drink} - ${order.size}`;

    const customerName = document.createElement("p");
    customerName.textContent = `customer name: ${order.customerName}`;

    const status = document.createElement("p");
    status.textContent = `status: ${order.status}`;

    orderItem.append(header, customerName, status);
    ordersList.append(orderItem);
  });
}

function main() {
  fillList();
}

main();
