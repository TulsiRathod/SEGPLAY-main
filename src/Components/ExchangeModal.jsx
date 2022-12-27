import React from "react";

const ExchangeModal = ({exchangeModal,closeModal}) => {
  return (
    <>
      <div id="exchange_modal" class="modal" style={exchangeModal ? { display: "flex" } : { display: "none" }}>
        <div class="modal-content" id="exchange_modal_content">
          <span class="close" id="exchange_close" onClick={closeModal}>
            &times;
          </span>
          <p class="modal_title">Listed Stocks</p>
          <hr />
          <div class="scroll_content">
            <table class="table table-striped" id="exchange_tbl">
              <thead style={{ backgroundColor: "#20958f" }}>
                <tr>
                  <th style={{ color: "#fff" }}>Stock Name</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Stock Price
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Maximum Quantity
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>Sector</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>NFLX</h5>
                    Netflix, Inc.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>1000000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>XYZ</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeModal;
