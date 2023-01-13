import React from "react";

const StockHistory = ({ stockHistoryModal, closeModal }) => {
  return (
    <>
      <div
        id="portfolio_modal"
        className="modal"
        style={stockHistoryModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="portfolio_modal_content">
          <span className="close" id="portfolio_close" onClick={closeModal}>
            &times;
          </span>
          <p className="modal_title">Stock Exchange History</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped" id="portfolio_tbl">
              <thead style={{ backgroundColor: "#20958f" }}>
                <tr>
                  <th style={{ color: "#fff" }}>Stock Name</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Holding Quantity
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Average Buy Price
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Invested Amount
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>LTP</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Current Amount
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Change Amount
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Change Percentage
                  </th>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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
                    <p>$2500.00</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>50K</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$25000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>$250000</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>8.00%</p>
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

export default StockHistory;
