import React, { useEffect } from "react";
import { toIndianCurrency } from "../Baseurl";

const PortfolioModal = ({
  portfolioModal,
  closeModal,
  portfolioDetails,
  shortShellDetails,
}) => {
  // useEffect(()=>{
  //   console.log(shortShellDetails);
  // },[]);

  return (
    <>
      <div
        id="portfolio_modal"
        className="modal"
        style={portfolioModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="portfolio_modal_content">
          <span
            className="close"
            id="portfolio_close"
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          >
            &times;
          </span>
          <p className="modal_title">Portfolio</p>
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
                  <th style={{ textAlign: "center", color: "#fff" }}>LTP</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Invested Amount
                  </th>
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
                {portfolioDetails.map((elem) => (
                  <tr>
                    <td>
                      <h5>{elem.company_ticker}</h5>
                      {elem.company_name}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {
                          toIndianCurrency(parseInt(elem.total_stock))
                            .substring(1)
                            .split(".")[0]
                        }
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {toIndianCurrency(
                          elem.total_investment_amount / elem.total_stock
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{toIndianCurrency(elem.current_stock_price)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{toIndianCurrency(elem.total_investment_amount)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {toIndianCurrency(
                          elem.current_stock_price * elem.total_stock
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {toIndianCurrency(
                          elem.current_stock_price * elem.total_stock -
                            elem.total_investment_amount
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: `${
                            elem.current_stock_price -
                              elem.average_buying_price <
                            0
                              ? "red"
                              : elem.current_stock_price -
                                  elem.average_buying_price ===
                                0
                              ? "black"
                              : "green"
                          }`,
                        }}
                      >
                        {toIndianCurrency(
                          (
                            ((elem.current_stock_price -
                              elem.average_buying_price) /
                              elem.average_buying_price) *
                            100
                          ).toFixed(2)
                        )}
                        %
                      </p>
                    </td>
                  </tr>
                ))}
                {shortShellDetails.map((elem) => (
                  <tr>
                    <td>
                      <h5>{elem.company_ticker}</h5>
                      {elem.company_name.toLowerCase()}(ShortSell)
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {
                          toIndianCurrency(parseInt(elem.stock_quantity))
                            .substring(1)
                            .split(".")[0]
                        }
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{toIndianCurrency(elem.buying_price)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{toIndianCurrency(elem.buying_price)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {toIndianCurrency(
                          elem.buying_price * elem.stock_quantity
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {toIndianCurrency(
                          elem.stock_quantity * elem.buying_price
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>0</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>0%</p>
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

export default PortfolioModal;
