/**
 * ordersController.js
 *
 * handles the logic for incoming requests to the cafe api related to orders.
 *
 * author: christopher romo
 * created: 2026-04-17
 */

import { cafeOrders } from "../data/cafeOrders.js";

let nextId = Math.max(...cafeOrders.map((order) => order.id));

export const getAllOrders = (req, res) => {
  let filteredOrders = [...cafeOrders];

  // destructure the request query
  const { id, drink, size, customerName, status } = req.query;

  // filter the orders by present queries
  if (id) {
    filteredOrders = filteredOrders.filter((order) => order.id === Number(id));
  }
  if (drink) {
    filteredOrders = filteredOrders.filter(
      (order) => order.drink.toLowerCase() === drink.toLowerCase(),
    );
  }
  if (size) {
    filteredOrders = filteredOrders.filter(
      (order) => order.size.toLowerCase() === size.toLowerCase(),
    );
  }
  if (customerName) {
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.customerName.toLowerCase() === customerName.toLowerCase(),
    );
  }
  if (status) {
    filteredOrders = filteredOrders.filter(
      (order) => order.status.toLowerCase() === status.toLowerCase(),
    );
  }

  // respond with appropriate message
  if (filteredOrders.length === 0) {
    return res.json([]);
  } else {
    return res.json(filteredOrders);
  }
};

export const getOrderById = (req, res) => {
  // find the order by the id
  const orderId = Number(req.params.id);
  const order = cafeOrders.find((order) => order.id === orderId);

  // respond with appropriate message
  if (!order) {
    return res.status(404).json({ message: "invalid order id." });
  } else {
    return res.json(order);
  }
};

export const postOrder = (req, res) => {
  // destructure the request body
  const { drink, size, customerName, status } = req.body || {};

  // respond with appropriate message
  if (!drink || !size || !customerName || !status) {
    return res.status(400).json({
      message:
        "all properties needed to post order: drink, size, customerName, status",
    });
  } else {
    const newOrder = {
      id: ++nextId,
      drink: drink,
      size: size,
      customerName: customerName,
      status: status,
    };

    cafeOrders.push(newOrder);
    return res.status(201).json(newOrder);
  }
};

export const updateOrder = (req, res) => {
  // destructure the request body
  const { drink, size, customerName, status } = req.body || {};

  // find the order using id parameter
  const order = cafeOrders.find((order) => order.id === Number(req.params.id));

  // respond with appropriate message
  if (!order) {
    return res.status(404).json({ message: "invalid order id." });
  } else {
    if (drink !== undefined) order.drink = drink;
    if (size !== undefined) order.size = size;
    if (customerName !== undefined) order.customerName = customerName;
    if (status !== undefined) order.status = status;

    return res.status(200).json(order);
  }
};

export const deleteOrder = (req, res) => {
  // find the order using id parameter
  const orderIndex = cafeOrders.findIndex(
    (order) => order.id === Number(req.params.id),
  );

  // respond with appropriate message
  if (orderIndex === -1) {
    return res.status(404).json({ message: "invalid order id." });
  } else {
    cafeOrders.splice(orderIndex, 1);
    return res.status(200).json({ message: "order deleted." });
  }
};
