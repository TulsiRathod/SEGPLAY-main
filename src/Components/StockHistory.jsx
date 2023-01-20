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
          <p className="modal_title">Stock Exchange History</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped">
              <thead style={{ backgroundColor: "#20958f" }}>
                <tr>
                  <th>DAY</th>
                  <th>ADANI</th>
                  <th>GOOGLE</th>
                  <th>SHELL</th>
                  <th>SUN PHARMA</th>
                  <th>TESLA</th>
                  <th>YES BANK</th>
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
