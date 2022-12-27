import React from "react";

const PortfolioModal = ({portfolioModal,closeModal}) => {
  return (
    <>
      <div id="portfolio_modal" class="modal"  style={portfolioModal ? { display: "flex" } : { display: "none" }}>
        <div class="modal-content" id="portfolio_modal_content">
          <span class="close" id="portfolio_close" onClick={closeModal}>
            &times;
          </span>
          <p class="modal_title">Portfolio</p>
          <hr />
          <div class="scroll_content">
            <table class="table table-striped" id="portfolio_tbl">
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

export default PortfolioModal;
