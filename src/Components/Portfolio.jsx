import { fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import { toIndianCurrency } from "../Baseurl";

const Portfolio = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [stockDetails, setStockDetails] = useState([]);
  const [shortShellDetails, setshortShellDetails] = useState([]);
  useEffect(() => {
    setPortfolio(props.portfolioDetails);
    setStockDetails(props.stockExchangeDetails);
    setshortShellDetails(props.shortShellDetails);
  }, [props]);

  const colorBG = (e1, e2) => {
    if (e2 === 0) {
      return "#828282";
    } else {
      var diff = ((e1 - e2) / e2) * 100;
      if (diff < -20) {
        return "#A30000";
      } else if (diff < -10) {
        return "#D10000";
      } else if (diff < 0) {
        return "#FF2E2E";
      } else if (diff > 20) {
        return "#004225";
      } else if (diff > 10) {
        return "#138808";
      } else if (diff > 0) {
        return "#32CD32";
      } else {
        return "#828282";
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
                height: "auto",
                margin: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
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
                            height: "55%",
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
                                height: "40px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ color: "white", fontSize: "12px" }}>
                              {stockDetails[4].company_ticker}
                            </div>
                            <div style={{ color: "white", fontSize: "12px" }}>
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
                            height: "45%",
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
                            <div style={{ color: "white", fontSize: "11px" }}>
                              {stockDetails[5].company_ticker}
                            </div>
                            <div style={{ color: "white", fontSize: "11px" }}>
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
              <div className="portfolio_tbl" style={{ overflowY: "scroll" }}>
                <table id="portfolio_tbl">
                  <tr>
                    <th>Company</th>
                    <th style={{ textAlign: "center" }}>Last Price</th>
                    <th style={{ textAlign: "end" }}>P&L</th>
                  </tr>
                  {portfolio.map((elem) => (
                    <tr>
                      <td>
                        <p style={{ fontSize: "18px", fontWeight: "700" }}>
                          {elem.company_name}
                        </p>
                        <p
                          className="portfolio-qty"
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            color: "grey",
                          }}
                        >
                          Qty. :{elem.total_stock}
                        </p>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <p>{toIndianCurrency(elem.current_stock_price)}</p>
                      </td>
                      <td style={{ textAlign: "end" }}>
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
                            (elem.current_stock_price -
                              elem.average_buying_price) *
                              elem.total_stock
                          ) === "NaN"
                            ? "0.00"
                            : toIndianCurrency(
                                elem.current_stock_price * elem.total_stock -
                                  elem.average_buying_price * elem.total_stock
                              )}
                        </p>
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
                            fontSize: "10px",
                          }}
                        >
                          (
                          {(
                            ((
                              elem.current_stock_price -
                              elem.average_buying_price
                            ).toFixed(2) /
                              elem.average_buying_price) *
                            100
                          ).toFixed(2) === "NaN"
                            ? "0.00"
                            : (
                                ((
                                  elem.current_stock_price -
                                  elem.average_buying_price
                                ).toFixed(2) /
                                  elem.average_buying_price) *
                                100
                              ).toFixed(2)}
                          %)
                        </p>
                      </td>

                      {/* <td style={{ textAlign: "end" }}>
                        <p>
                          {toIndianCurrency(
                            elem.total_stock * elem.current_stock_price
                          )}
                        </p>
                      </td> */}
                    </tr>
                  ))}
                  {shortShellDetails.map((elem) => (
                    <tr>
                      <td>
                        <p style={{ fontSize: "18px", fontWeight: "700" }}>
                          {elem.company_ticker}
                        </p>
                        <p
                          style={{
                            fontSize: "10px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          {" "}
                          Qty. : {elem.stock_quantity} (ShortSell)
                        </p>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <p>{toIndianCurrency(elem.buying_price)}</p>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        <p>--</p>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
