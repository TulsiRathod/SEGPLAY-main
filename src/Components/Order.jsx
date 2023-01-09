import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";

const Order = (props) => {
  const { stockDetails, getWalletDetails, setdisableOrders, disableOrders } =
    props;
  const [quantity, setQuantity] = useState(500);
  const [maxQ, setMaxQ] = useState();
  const [price, setPrice] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyId, setCompanyId] = useState();
  const nf = new Intl.NumberFormat();

  useEffect(() => {
    // console.log(stockDetails);
    calMaxLot();
  }, [companyName]);

  const calMaxLot = () => {
    stockDetails.map((stock) => {
      if (companyName === stock.company_name) {
        setCompanyId(stock.id);
        setMaxQ(parseInt(stock.quantity / 12));
        setPrice(parseInt(stock.price));
      }
    });
  };

  const handleBuy = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/buy-order`,
      headers: {},
      data: {
        team_id: teamId,
        company_id: companyId,
        stock_quantity: parseInt(quantity),
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        console.log("order ho gaya", response);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
        setQuantity(500);
        setPrice(0);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleSell = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/sell-order`,
      headers: {},
      data: {
        team_id: teamId,
        company_id: companyId,
        stock_quantity: parseInt(quantity),
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        console.log("Sell ho gaya", response);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleShortSell = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/short-sell-order`,
      headers: {},
      data: {
        team_id: teamId,
        company_id: companyId,
        stock_quantity: parseInt(quantity),
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        stock_price: price,
        round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        console.log("Short Sell ho gaya", response);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="order">
        <h3 className="mt-1" style={{ marginBottom: "calc(15vh - 75px)" }}>
          Order
        </h3>
        <div id="order_share" action="#">
          <select
            className="form-select mb-3"
            style={{ backgroundColor: "#d2f9f7" }}
            name="company"
            id="company"
            onChange={(e) => {
              setCompanyName(e.target.value);
              setQuantity(500);
            }}
          >
            <option value="0">Select company</option>
            {stockDetails.map((company) => (
              <option value={company.name}>{company.company_name}</option>
            ))}
          </select>
          <p
            className={`m-0 text-light d-${companyName ? "block" : "none"}`}
            style={{ fontSize: "10px", fontWeight: "700" }}
          >
            Max Quantity:{" "}
            <span className="text-warning me-2">
              {nf.format(maxQ - (maxQ % 500))}
            </span>{" "}
            Share Price:{" "}
            <span className="text-warning">{nf.format(price)}</span>
          </p>
          <input
            type="number"
            value={quantity}
            style={{ backgroundColor: "#d2f9f7" }}
            className="mb-3"
            onChange={(e) => setQuantity(e.target.value)}
            step={500}
            min={500}
            max={maxQ}
            placeholder="Enter value in 500's figure"
            name=""
            id=""
          />

          <input
            className="form-control"
            style={{
              marginBottom: "calc(14vh - 46px)",
              backgroundColor: "#d2f9f7",
            }}
            value={companyName ? nf.format(price * quantity) : ""}
            type="text"
            name="Total"
            id="Totala"
            placeholder="Total Amount"
            disabled
          />
          <div className="row">
            <div className="col-lg-7 mb-1">
              <button
                type="button"
                className="bn bn-red"
                onClick={handleSell}
                disabled={disableOrders}
              >
                SELL
              </button>
            </div>
            <div className="col-lg-5 ps-0 mb-1">
              <button
                type="button"
                className="bn bn-green"
                onClick={handleBuy}
                disabled={disableOrders}
              >
                BUY
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-1">
              <button
                type="button"
                className="bn bn-clear"
                disabled={disableOrders}
              >
                PASS
              </button>
            </div>
            <div className="col-lg-7 ps-0 mt-1">
              <button
                type="button"
                className="bn bn-red"
                onClick={handleShortSell}
                disabled={disableOrders}
              >
                SORT SELL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
