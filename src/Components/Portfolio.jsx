import React, { useEffect, useState } from "react";

const Portfolio = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [stockDetails, setStockDetaials] = useState([]);
  useEffect(() => {
    setPortfolio(props.portfolioDetails);
    setStockDetaials(props.stockExchangeDetails);
  }, [props]);

  const colorBG = (e1, e2) => {
    if (e2 == 0) {
      return "#828282";
    } else {
      var diff = ((e1 - e2) / e2) * 100;
      if (diff < -10) {
        return "#A30000";
      } else if (diff < -5) {
        return "#D10000";
      } else if (diff < 0) {
        return "#FF2E2E";
      } else if (diff > 10) {
        return "#004225";
      } else if (diff > 5) {
        return "#138808";
      } else if (diff > 0) {
        return "#32CD32";
      }
    }
  };
  return (
    <>
      <div className="portfolio ">
        <div
          className="row justify-content-center"
          style={{ height: "calc(40vh - 60px)" }}
        >
          <div className="col-5 d-flex">
            <div
              className="row"
              style={{
                width: "800px",
                height: "260px",
                margin: "10px",
                border: "3px solid black",
                borderRadius: "20px",
              }}
            >
              <div className="col-6">
                {stockDetails.length > 0 ? (
                  <>
                    <div
                      className="row"
                      style={{
                        backgroundColor: `${colorBG(
                          stockDetails[0].price,
                          stockDetails[0].previous_day_price
                        )}`,
                        border: "1px solid white",
                        height: "60%",
                        borderRadius: "16px 0 0 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`../assets/${stockDetails[0].company_ticker}.png`}
                          style={{
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <div style={{ color: "white" }}>
                          {stockDetails[0].company_ticker}
                        </div>
                        <div style={{ color: "white" }}>
                          {stockDetails[0].previous_day_price !== 0
                            ? (
                                ((stockDetails[0].price -
                                  stockDetails[0].previous_day_price) *
                                  100) /
                                stockDetails[0].previous_day_price
                              ).toPrecision(4)
                            : 0}
                          %
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {stockDetails.length > 0 ? (
                  <>
                    <div
                      className="row"
                      style={{
                        backgroundColor: `${colorBG(
                          stockDetails[1].price,
                          stockDetails[1].previous_day_price
                        )}`,
                        border: "1px solid white",
                        height: "40%",
                        borderRadius: "0 0 0 16px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`../assets/${stockDetails[1].company_ticker}.png`}
                          style={{
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <div style={{ color: "white" }}>
                          {stockDetails[1].company_ticker}
                        </div>
                        <div style={{ color: "white" }}>
                          {stockDetails[1].previous_day_price !== 0
                            ? (
                                ((stockDetails[1].price -
                                  stockDetails[1].previous_day_price) *
                                  100) /
                                stockDetails[1].previous_day_price
                              ).toPrecision(4)
                            : 0}
                          %
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6">
                {stockDetails.length > 0 ? (
                  <>
                    <div
                      className="row"
                      style={{
                        backgroundColor: `${colorBG(
                          stockDetails[2].price,
                          stockDetails[2].previous_day_price
                        )}`,
                        border: "1px solid white",
                        height: "30%",
                        borderRadius: "0 16px 0 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`../assets/${stockDetails[2].company_ticker}.png`}
                          style={{
                            height: "30px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <div style={{ color: "white", fontSize: "12px" }}>
                          {stockDetails[2].company_ticker}
                        </div>
                        <div style={{ color: "white", fontSize: "12px" }}>
                          {stockDetails[2].previous_day_price !== 0
                            ? (
                                ((stockDetails[2].price -
                                  stockDetails[2].previous_day_price) *
                                  100) /
                                stockDetails[2].previous_day_price
                              ).toPrecision(4)
                            : 0}
                          %
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="row" style={{ height: "70%" }}>
                  {stockDetails.length > 0 ? (
                    <>
                      <div
                        className="col-6"
                        style={{
                          backgroundColor: `${colorBG(
                            stockDetails[3].price,
                            stockDetails[3].previous_day_price
                          )}`,
                          border: "1px solid white",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <img
                            src={`../assets/${stockDetails[3].company_ticker}.png`}
                            style={{
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <div style={{ color: "white" }}>
                            {stockDetails[3].company_ticker}
                          </div>
                          <div style={{ color: "white" }}>
                            {stockDetails[3].previous_day_price !== 0
                              ? (
                                  ((stockDetails[3].price -
                                    stockDetails[3].previous_day_price) *
                                    100) /
                                  stockDetails[3].previous_day_price
                                ).toPrecision(4)
                              : 0}
                            %
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="col-6">
                    {stockDetails.length > 0 ? (
                      <>
                        <div
                          className="row"
                          style={{
                            height: "40%",
                            backgroundColor: `${colorBG(
                              stockDetails[4].price,
                              stockDetails[4].previous_day_price
                            )}`,
                            border: "1px solid white",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={`../assets/${stockDetails[4].company_ticker}.png`}
                              style={{
                                height: "30px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ color: "white", fontSize: "10px" }}>
                              {stockDetails[4].company_ticker}
                            </div>
                            <div style={{ color: "white", fontSize: "10px" }}>
                              {stockDetails[4].previous_day_price !== 0
                                ? (
                                    ((stockDetails[4].price -
                                      stockDetails[4].previous_day_price) *
                                      100) /
                                    stockDetails[4].previous_day_price
                                  ).toPrecision(4)
                                : 0}
                              %
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {stockDetails.length > 0 ? (
                      <>
                        <div
                          className="row"
                          style={{
                            height: "60%",
                            backgroundColor: `${colorBG(
                              stockDetails[5].price,
                              stockDetails[5].previous_day_price
                            )}`,
                            border: "1px solid white",
                            borderRadius: "0 0 16px 0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={`../assets/${stockDetails[5].company_ticker}.png`}
                              style={{
                                height: "35px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ color: "white", fontSize: "12px" }}>
                              {stockDetails[5].company_ticker}
                            </div>
                            <div style={{ color: "white", fontSize: "12px" }}>
                              {stockDetails[5].previous_day_price !== 0
                                ? (
                                    ((stockDetails[5].price -
                                      stockDetails[5].previous_day_price) *
                                      100) /
                                    stockDetails[5].previous_day_price
                                  ).toPrecision(4)
                                : 0}
                              %
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 p-2">
            <div className="px-3 portfolio_tbl_wrapper">
              <h3 className="mb-0">Portfolio</h3>
              <hr className="mt-2" />
              <table id="portfolio_tbl">
                <tr>
                  <th>Company</th>
                  <th style={{ textAlign: "center" }}>Last Price</th>
                  <th style={{ textAlign: "center" }}>P&L</th>
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
                    <td style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: `${
                            elem.current_stock_price - elem.average_buying_price<0
                              ? "red"
                              : "green"
                          }`,
                        }}
                      >
                        {(
                          ((
                            elem.current_stock_price - elem.average_buying_price
                          ).toFixed(2) /
                            elem.average_buying_price) *
                          100
                        ).toFixed(2)}
                        %
                      </p>
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
