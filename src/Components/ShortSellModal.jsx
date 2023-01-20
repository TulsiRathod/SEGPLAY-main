import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL, toIndianCurrency } from "../Baseurl";

const ShortSellModal = ({ shortSellModal, closeModal }) => {
  const nf = new Intl.NumberFormat();
  const [shortSellDetail, setShortSellDetail] = useState([]);

  const getShortSellDetails = () => {
    const team_id = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      data: {
        day_no: 1,
        team_id: team_id,
      },
      url: `${SERVER_URL}api/main/get-current-day-short-sell`,
    })
      .then((response) => {
        console.log(response, "shortSelldata");
        setShortSellDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getShortSellDetails();
  }, []);

  return (
    <>
      <div
        id="exchange_modal"
        className="modal"
        style={shortSellModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="exchange_modal_content">
          <span className="close" id="exchange_close" onClick={closeModal}>
            &times;
          </span>
          <p className="modal_title">ShortSell Settlement Detail</p>
          <hr />
          <div className="scroll_content">
            <table className="table table-striped" id="exchange_tbl">
              <thead style={{ backgroundColor: "#20958f" }}>
                <tr>
                  <th style={{ color: "#fff" }}>No</th>
                  <th style={{ color: "#fff" }}>Stock Name</th>

                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Stock Buying Price
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Quantity
                  </th>
                  <th style={{ textAlign: "center", color: "#fff" }}>
                    Total Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {shortSellDetail.length > 0
                  ? shortSellDetail.map((elem, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <h5>{elem.company_ticker}</h5>
                          {elem.company_name}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{toIndianCurrency(elem.stock_price)}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{nf.format(elem.stock_quantity)}</p>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{elem.total_amount}</p>
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

export default ShortSellModal;
