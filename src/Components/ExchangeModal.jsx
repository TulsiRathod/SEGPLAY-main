import React from "react";

const ExchangeModal = ({ exchangeModal, closeModal, stockExchangeDetails }) => {
  // console.log(stockExchangeDetails);
  const nf = new Intl.NumberFormat();

  return (
    <>
      <div
        id="exchange_modal"
        className="modal"
        style={exchangeModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="exchange_modal_content">
          <span className="close" id="exchange_close" onClick={closeModal}>
            &times;
          </span>
          <p className="modal_title">Listed Stocks</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped" id="exchange_tbl">
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
                {stockExchangeDetails.length > 0
                  ? stockExchangeDetails.map((elem) => (
                      <tr>
                        <td>
                          <h5>{elem.company_ticker}</h5>
                          {elem.company_name}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{nf.format(elem.price)}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{nf.format(elem.quantity)}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{elem.sector}</p>
                        </td>
                      </tr>
                    ))
                  : "No data found"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeModal;
