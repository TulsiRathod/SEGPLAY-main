import React from "react";
import { toIndianCurrency } from "../Baseurl";

const StockHistory = ({
  stockHistoryModal,
  stockHistoryDetails,
  stockExchangeDetails,
  closeModal,
}) => {
  // console.log(stockHistoryDetails);

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
          <p className="modal_title">Price History</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped">
              <thead
                style={{ backgroundColor: "#20958f" }}
                className="change-color"
              >
                <tr>
                  <th style={{ color: "white" }}>DAY</th>
                  <th style={{ color: "white" }}>GOOGLE</th>
                  <th style={{ color: "white" }}>ADANI</th>
                  <th style={{ color: "white" }}>SHELL</th>
                  <th style={{ color: "white" }}>YES BANK</th>
                  <th style={{ color: "white" }}>TESLA</th>
                  <th style={{ color: "white" }}>SUN PHARMA</th>
                </tr>
              </thead>

              <tbody>
                {stockHistoryDetails.map((element, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    {element.map((e, i) => (
                      <td>{toIndianCurrency(e.price)}</td>
                    ))}
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

export default StockHistory;
