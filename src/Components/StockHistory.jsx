import React, { useState } from "react";

const StockHistory = ({ stockExchangeDetails,stockHistoryModal, closeModal }) => {
  const [day,setDay]=useState(0);
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
                  <th style={{ color:"white" }}><p>DAY</p></th>
                  {stockExchangeDetails.map((elem)=>
                  <th style={{ textAlign: "center",color:"white" }}>
                  <p>{elem.company_name}</p>
                </th>
                  )}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{day}</td>
                {stockExchangeDetails.map((elem)=>
                <td style={{ textAlign: "center"}}>
                  <p>{elem.price}</p>
                </td>
                )}
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
