import React, { useEffect } from "react";

const PortfolioModal = ({portfolioModal,closeModal,portfolioDetails}) => {
  useEffect(()=>{
    console.log(portfolioDetails);
  })
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
                {portfolioDetails.map((elem)=>
                <tr>
                  <td>
                    <h5>{elem.company_ticker}</h5>
                    {elem.company_name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{elem.total_stock}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{Math.round(elem.total_investment_amount/elem.total_stock)}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{elem.total_investment_amount}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{elem.current_stock_price*elem.total_stock}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{Math.round((elem.current_stock_price*elem.total_stock)-elem.total_investment_amount)}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{Math.round((((elem.current_stock_price*elem.total_stock)-elem.total_investment_amount)/elem.total_investment_amount))}</p>
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
