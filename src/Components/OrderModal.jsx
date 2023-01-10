import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";

const OrderModal = ({ orderModal, closeModal, orderHistory }) => {
  return (
    <>
      <div
        id="order_modal"
        class="modal"
        style={orderModal ? { display: "flex" } : { display: "none" }}
      >
        <div class="modal-content" id="order_modal_content">
          <span class="close" id="table_order_close" onClick={closeModal}>
            &times;
          </span>
          <p class="modal_title">Order History</p>
          <hr />
          <div class="scroll_content">
            <table class="table table-striped">
              <thead style={{ backgroundColor: "#20958f", color: "#fff" }}>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Script</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Order Type</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr>
                    <td>{order.day}</td>
                    <td>
                      {order.execution === 0 ? "Failed" : ""}
                      {order.execution === 1 ? "Pending" : ""}
                      {order.execution === 2 ? "Executed" : ""}
                    </td>
                    <td>{order.company_name}</td>
                    <td>{order.stock_quantity}</td>
                    <td>{order.stock_price}</td>
                    <td>{order.stock_price * order.stock_quantity}</td>
                    <td>
                      {order.order_type === 0 ? "Buy" : ""}
                      {order.order_type === 1 ? "Sell" : ""}
                      {order.order_type === 2 ? "ShortSell" : ""}
                      {order.order_type === 3 ? "Pass" : ""}
                      {order.order_type === 4 ? "Veto" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
