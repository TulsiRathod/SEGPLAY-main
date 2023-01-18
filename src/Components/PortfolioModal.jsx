import React, { useEffect } from "react";

const PortfolioModal = ({ portfolioModal, closeModal, portfolioDetails, shortShellDetails }) => {
  // useEffect(()=>{
  //   console.log(shortShellDetails);
  // },[]);
  const nf = new Intl.NumberFormat();

  return (
    <>
      <div
        id="portfolio_modal"
        className="modal"
        style={portfolioModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="portfolio_modal_content">
          <span className="close" id="portfolio_close" onClick={closeModal} style={{cursor:'pointer'}}>
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
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    LTP
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
                {portfolioDetails.map((elem) => (
                  <tr>
                    <td>
                      <h5>{elem.company_ticker}</h5>
                      {elem.company_name}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{nf.format(elem.total_stock)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {nf.format(
                          elem.total_investment_amount / elem.total_stock
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{nf.format(elem.current_stock_price)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{nf.format(elem.total_investment_amount)}</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {nf.format(elem.current_stock_price * elem.total_stock)}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>
                        {Math.round(
                          elem.current_stock_price * elem.total_stock -
                            elem.total_investment_amount
                        )}
                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p style={{color:`${elem.current_stock_price-elem.average_buying_price?'red':'green'}`}}>{((elem.current_stock_price-elem.average_buying_price)/elem.average_buying_price)*100}%</p>
                    </td>
                  </tr>
                ))}
                {shortShellDetails.map((elem)=>
                  <tr>
                  <td>
                    <h5>{elem.company_ticker}</h5>
                    {elem.company_name}(Short Shell)
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{nf.format(elem.stock_quantity)}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>
                      {nf.format(
                        elem.buying_price
                      )}
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{nf.format(elem.buying_price)}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{nf.format(elem.buying_price*elem.stock_quantity)}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>
                      {nf.format(elem.stock_quantity * elem.buying_price)}
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>
                      0
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                        <p>0%</p>
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
