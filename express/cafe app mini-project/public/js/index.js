/**
 * index.js
 *
 * handles logic for index.html.
 *
 * author: christopher romo
 * created: 2026-04-20
 */

function sortOrders(orders) {
  // sorts the orders based on status then customer name.

  const statusOrder = {
    pending: 0,
    ready: 1,
    complete: 2,
  };

  orders.sort((a, b) => {
    const statusDifference = statusOrder[a.status] - statusOrder[b.status];

    if (statusDifference !== 0) {
      return statusDifference;
    }

    return a.customerName.localeCompare(b.customerName, undefined, {
      sensitivity: "base",
    });
  });
}

function createOrderItem(order) {
  // creates an order item.

  const orderItem = document.createElement("div");
  orderItem.classList.add("order-item");

  // order image div
  const orderImage = document.createElement("div");
  orderImage.classList.add("order-image");

  const image = document.createElement("img");
  image.alt = "coffee order icon";
  image.src = "/images/coffee-icon.png";

  orderImage.append(image);

  // order info div
  const orderInfo = document.createElement("div");
  orderInfo.classList.add("order-info");

  const header = document.createElement("p");
  const boldText = document.createElement("b");
  boldText.textContent = `${order.drink} - ${order.size}`;

  header.append(boldText);

  const customerName = document.createElement("p");
  customerName.textContent = `customer name: ${order.customerName}`;

  const status = document.createElement("p");
  status.textContent = `status: ${order.status} `;

  const statusIcon = document.createElement("img");
  if (order.status === "complete") {
    statusIcon.alt = "complete icon";
    statusIcon.src = "/images/complete-icon.png";
  } else if (order.status === "ready") {
    statusIcon.alt = "ready icon";
    statusIcon.src = "/images/ready-icon.png";
  } else {
    statusIcon.alt = "pending icon";
    statusIcon.src = "/images/pending-icon.png";
  }

  status.append(statusIcon);
  orderInfo.append(header, customerName, status);

  // order buttons div
  const orderButtons = document.createElement("div");
  orderButtons.classList.add("order-buttons");

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "order-button", "btn-sm", "remove-button");
  removeButton.dataset.orderId = order.id;
  removeButton.textContent = "remove";

  // bootstrap dropdown
  const statusDropdown = document.createElement("div");
  statusDropdown.classList.add("dropdown");
  statusDropdown.dataset.orderId = order.id;

  const statusDropdownButton = document.createElement("button");
  statusDropdownButton.classList.add(
    "btn",
    "order-button",
    "btn-sm",
    "dropdown-toggle",
  );
  statusDropdownButton.type = "button";
  statusDropdownButton.setAttribute("data-bs-toggle", "dropdown");
  statusDropdownButton.setAttribute("aria-expanded", "false");
  statusDropdownButton.textContent = "status";

  const statusDropdownMenu = document.createElement("ul");
  statusDropdownMenu.classList.add("dropdown-menu");

  const pendingListItem = document.createElement("li");
  const pendingAnchor = document.createElement("a");
  pendingAnchor.classList.add("dropdown-item");
  pendingAnchor.dataset.status = "pending";
  pendingAnchor.textContent = "pending";
  pendingListItem.append(pendingAnchor);

  const readyListItem = document.createElement("li");
  const readyAnchor = document.createElement("a");
  readyAnchor.classList.add("dropdown-item");
  readyAnchor.dataset.status = "ready";
  readyAnchor.textContent = "ready";
  readyListItem.append(readyAnchor);

  const completeListItem = document.createElement("li");
  const completeAnchor = document.createElement("a");
  completeAnchor.classList.add("dropdown-item");
  completeAnchor.dataset.status = "complete";
  completeAnchor.textContent = "complete";
  completeListItem.append(completeAnchor);

  statusDropdownMenu.append(pendingListItem, readyListItem, completeListItem);
  statusDropdown.append(statusDropdownButton, statusDropdownMenu);
  orderButtons.append(removeButton, statusDropdown);

  // append all three divs and return the order item
  orderItem.append(orderImage, orderInfo, orderButtons);
  return orderItem;
} // createOrderItem

async function fillList() {
  // fills the all orders list.

  const allOrdersList = document.getElementById("all-orders-list");
  allOrdersList.innerHTML = "";

  try {
    // make api request
    const res = await fetch("/orders");
    if (!res.ok) throw new Error("failed to load orders.");

    const orders = await res.json();

    // display a message if the list is empty
    if (orders.length === 0) {
      const message = document.createElement("p");
      message.textContent = "no orders yet...";
      allOrdersList.append(message);
      return;
    }

    // sort the orders
    sortOrders(orders);

    // create order items
    orders.forEach((order) => {
      const orderItem = createOrderItem(order);
      allOrdersList.append(orderItem);
    });
  } catch {
    const message = document.createElement("p");
    message.textContent =
      "could not load orders. please check your connection and try again.";
    allOrdersList.append(message);
  }
}

async function addOrder(newOrderForm) {
  // adds an order to the cafe api.

  try {
    const drink = document.getElementById("drink-name-input-field");
    const size = document.querySelector(
      'input[name="size-radio-buttons"]:checked',
    ).value;
    const customerName = document.getElementById("customer-name-input-field");
    const status = "pending";

    // make api request
    const res = await fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        drink: drink.value,
        size: size,
        customerName: customerName.value,
        status: status,
      }),
    });

    // respond with appropriate message
    if (res.ok) {
      alert("order added!");
      newOrderForm.reset();
      await fillList();
    } else {
      const error = await res.json();
      alert(error.error);
    }
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

async function editOrder(id, updatedOrder) {
  // edits an order in the cafe api.

  try {
    const { drink, size, customerName, status } = updatedOrder;

    const order = {};
    if (drink !== undefined) order.drink = drink;
    if (size !== undefined) order.size = size;
    if (customerName !== undefined) order.customerName = customerName;
    if (status !== undefined) order.status = status;

    // make api request
    const res = await fetch(`/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    // respond with appropriate message
    if (res.ok) {
      alert("order updated!");
      await fillList();
    } else {
      const error = await res.json();
      alert(error.error);
    }
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

async function removeOrder(id) {
  // removes an order from the cafe api.

  try {
    // make api request
    const res = await fetch(`/orders/${id}`, {
      method: "DELETE",
    });

    // respond with appropriate message
    if (res.ok) {
      alert("order removed!");
      await fillList();
    } else {
      const error = await res.json();
      alert(error.error);
    }
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

function handleNewOrderFormSubmit(event) {
  // handles submit event for the new order form.

  event.preventDefault();
  addOrder(event.currentTarget);
}

function handleAllOrdersListClick(event) {
  // handles click event for the all orders list.

  const removeButton = event.target.closest(".remove-button");
  if (removeButton) {
    removeOrder(removeButton.dataset.orderId);
    return;
  }

  const statusOption = event.target.closest(".dropdown-item");
  if (statusOption) {
    const orderId = statusOption.closest(".dropdown").dataset.orderId;
    const status = statusOption.dataset.status;
    editOrder(orderId, { status });
  }
}

function main() {
  // sets up event listeners and fills the all orders list.

  const newOrderForm = document.getElementById("new-order-form");
  const allOrdersList = document.getElementById("all-orders-list");

  newOrderForm.addEventListener("submit", handleNewOrderFormSubmit);
  allOrdersList.addEventListener("click", handleAllOrdersListClick);

  fillList();
}

main();
