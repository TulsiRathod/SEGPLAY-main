import {  toIndianCurrency } from "../Baseurl";

const ShortSellHistory = ({ shortSellHistoryModal, closeModal, shortSellHistory }) => {
  const nf = new Intl.NumberFormat();

  return (
    <>
      <div
        id="exchange_modal"
        className="modal"
        style={shortSellHistoryModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="exchange_modal_content">
          <span className="close" id="exchange_close" onClick={closeModal}>
            &times;
          </span>
          <p className="modal_title">ShortSell Settlement History</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped" id="exchange_tbl">
              <thead style={{ backgroundColor: "#20958f" }}>
                <tr>
                  <th style={{ color: "#fff" }}>No</th>
                  <th style={{ color: "#fff" }}>Company Name</th>
                  <th style={{ color: "#fff" }}>Day</th>
                  <th style={{ color: "#fff" }}>Round</th>

                  <th style={{ textAlign: "center", color: "#fff" }}>Price</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Quantity
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Invested Amount
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>P&L</th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Total Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {shortSellHistory.length > 0
                  ? shortSellHistory.map((elem, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <h5>{elem.company_ticker}</h5>
                          {elem.company_name}
                        </td>
                        <td>{elem.day}</td>
                        <td>{elem.round_type}</td>
                        <td style={{ textAlign: "center" }}>
                          <p>{toIndianCurrency(Number(elem.stock_price))}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{nf.format(elem.stock_quantity)}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>
                            {toIndianCurrency(
                              Number(elem.stock_quantity * elem.stock_price)
                            )}
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            color: `${
                              elem.profit_lost < 0
                                ? "red"
                                : elem.profit_lost > 0
                                ? "green"
                                : "black"
                            }`,
                          }}
                        >
                          <p>{toIndianCurrency(Number(elem.profit_lost))}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{toIndianCurrency(Number(elem.total_amount))}</p>
                        </td>
                      </tr>
                    ))
                  : 
                  <tr>
                    <td colSpan={9} align="center">
                        You haven't short-sell anything
                    </td>
                  </tr>
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortSellHistory;
