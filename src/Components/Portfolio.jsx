import React, { useEffect, useState } from "react";

const Portfolio = ({ portfolioDetails }) => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    setPortfolio(portfolioDetails);
  });
  return (
    <>
      <div className="portfolio ">
        <div
          className="row justify-content-center"
          style={{ height: "calc(50vh - 60px)" }}
        >
          <div className="col-6 d-flex">
            <img
              src="../assets/graph.png"
              style={{
                borderRadius: "15px",
                width: "100%",
                margin: "auto",
              }}
              alt=""
            />
          </div>
          <div className="col-6 p-2">
            <div className="px-3 portfolio_tbl_wrapper">
              <h3 className="mb-0">Portfolio</h3>
              <hr className="mt-2" />

              <table id="portfolio_tbl">
                <tr>
                  <th>Company</th>
                  <th style={{ textAlign: "center" }}>Last Price</th>
                  <th style={{ textAlign: "end" }}>Quantity</th>
                </tr>
                {portfolio.map((elem) => (
                  <tr>
                    <td>
                      <h5>{elem.company_name}</h5>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <p>{elem.current_stock_price}</p>
                    </td>
                    <td style={{ textAlign: "end" }}>
                      <p>{elem.total_stock}</p>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
