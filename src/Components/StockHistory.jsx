import React, { useState } from "react";

const StockHistory = ({
  stockHistoryModal,
  stockHistoryDetails,
  stockExchangeDetails,
  closeModal,
}) => {
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
                  <th style={{ color: "white" }}>
                    <p>DAY</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>ADANI</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>GOOGLE</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>SHELL</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>SUN PHARMA</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>TESLA</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>YES BANK</p>
                  </th>
                  <th style={{ textAlign: "center", color: "white" }}>
                    <p>ADANI</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockHistory;
