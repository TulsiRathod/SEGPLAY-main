import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL, toIndianCurrency } from "../Baseurl";

const Order = (props) => {
  const {
    stockDetails,
    getWalletDetails,
    setdisableOrders,
    disableOrders,
    getOrderHistory,
    handlePass,
    orderIsPlaced,
    loggedInUsers,
  } = props;
  const [quantity, setQuantity] = useState(1000);
  const [maxQ, setMaxQ] = useState();
  const [price, setPrice] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyId, setCompanyId] = useState();
  const [buyRes, setBuyRes] = useState(false);
  const [sellRes, setSellRes] = useState(false);
  const [shortsellRes, setShortsellRes] = useState(false);
  const [passRes, setPassRes] = useState(false);

  const nf = new Intl.NumberFormat();

  useEffect(() => {
    // console.log(stockDetails);
    calMaxLot();
  }, [companyName]);

  const calMaxLot = () => {
    stockDetails.map((stock) => {
      if (companyName === stock.company_name) {
        setCompanyId(stock.id);
        setMaxQ(parseInt(stock.quantity / loggedInUsers.length));
        setPrice(parseInt(stock.price));
      }
    });
  };

  const handleBuy = () => {
    setBuyRes(true);
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
        // console.log("order ho gaya", response);
        setBuyRes(false);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
        getOrderHistory();
        setQuantity(1000);
        setPrice(0);
        orderIsPlaced();
      })
      .catch((error) => {
        setBuyRes(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleSell = () => {
    setSellRes(true);

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
        // console.log("Sell ho gaya", response);
        setSellRes(false);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
        getOrderHistory();
        setQuantity(1000);
        setPrice(0);
        orderIsPlaced();
      })
      .catch((error) => {
        setSellRes(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleShortSell = () => {
    setShortsellRes(true);
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
        setShortsellRes(false);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
        getOrderHistory();
        setQuantity(1000);
        setPrice(0);
        orderIsPlaced();
      })
      .catch((error) => {
        setShortsellRes(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleIncrease = () => {
    if (quantity + 1000 < maxQ) {
      setQuantity(quantity + 1000);
    } else {
      toast("Can't Increase Quantity");
    }
  };

  const handleDecrease = () => {
    if (quantity - 1000 > 0) {
      setQuantity(quantity - 1000);
    } else {
      toast("Quantity can't less than 0");
    }
  };

  return (
    <>
      <div className="order">
        <h3 className="mt-1" style={{ marginBottom: "calc(15vh - 85px)" }}>
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
              setQuantity(1000);
            }}
          >
            <option value="0">Select company</option>
            {stockDetails.map((company) => (
              <option value={company.name}>{company.company_name}</option>
            ))}
          </select>
          <p
            className={`mb-2 text-light d-${companyName ? "block" : "none"}`}
            style={{ fontSize: "10px", fontWeight: "700" }}
          >
            Max Quantity:{" "}
            <span className="text-warning me-2">
              {nf.format(maxQ - (maxQ % 1000))}
            </span>{" "}
            Share Price:{" "}
            <span className="text-warning">{nf.format(price)}</span>
          </p>
          <div className="row">
            <input
              type="button"
              value="-"
              className="col-2 mb-3"
              style={{ margin: "0 10px" }}
              onClick={handleDecrease}
            />
            <input
              type="number"
              value={quantity}
              style={{ backgroundColor: "#d2f9f7" }}
              className="col-6 mb-3"
              onChange={(e) => setQuantity(e.target.value)}
              step={1000}
              min={1000}
              max={maxQ}
              placeholder="Enter value in 500's figure"
              name=""
              id=""
              disabled="true"
            />
            <input
              type="button"
              value="+"
              className="col-2 mb-3"
              style={{ margin: "0 10px" }}
              onClick={handleIncrease}
            />
          </div>
          <input
            className="form-control"
            style={{
              marginBottom: "calc(14vh - 46px)",
              backgroundColor: "#d2f9f7",
            }}
            value={companyName ? toIndianCurrency(price * quantity) : ""}
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
                {sellRes === false ? "SELL" : "Loading.."}
              </button>
            </div>
            <div className="col-lg-5 ps-0 mb-1">
              <button
                type="button"
                className="bn bn-green"
                onClick={handleBuy}
                disabled={disableOrders}
              >
                {buyRes === false ? "BUY" : "Loading.."}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-1">
              <button
                type="button"
                className="bn bn-clear"
                disabled={disableOrders}
                onClick={() => handlePass()}
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
                {shortsellRes === false ? "SHORT SELL" : "Loading.."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
