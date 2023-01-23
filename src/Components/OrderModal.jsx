import React from "react";
import { toIndianCurrency } from "../Baseurl";

const OrderModal = ({ orderModal, closeModal, orderHistory }) => {
  return (
    <>
      <div
        id="order_modal"
        className="modal"
        style={orderModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="order_modal_content">
          <span className="close" id="table_order_close" onClick={closeModal}>
            &times;
          </span>
          <p className="modal_title">Order History</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped">
              <thead style={{ backgroundColor: "#20958f", color: "#fff" }}>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Round</th>
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
                    {order.order_type === 3 ? (
                      <>
                        <td>{order.day}</td>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                          Pass
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{order.day}</td>
                        <td>{order.round_type}</td>

                        <td>
                          {order.execution === 0 ? "Failed" : ""}
                          {order.execution === 1 ? "Executed" : ""}
                          {order.execution === 2 ? "Settled" : ""}
                        </td>
                        <td>{order.company_name}</td>
                        <td>{order.stock_quantity}</td>
                        <td>{toIndianCurrency(order.stock_price)}</td>
                        <td>
                          {toIndianCurrency(
                            order.stock_price * order.stock_quantity
                          )}
                        </td>
                        <td>
                          {order.order_type === 0 ? "Buy" : ""}
                          {order.order_type === 1 ? "Sell" : ""}
                          {order.order_type === 2 ? "ShortSell" : ""}
                          {/* {order.order_type === 3 ? "Pass" : ""} */}
                          {order.order_type === 4 ? "Veto" : ""}
                        </td>
                      </>
                    )}
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
