import React, { useEffect, useRef, useState } from "react";
import { ROUND_DELAY, SERVER_URL } from "../Baseurl";
import ExchangeModal from "./ExchangeModal";
import OrderModal from "./OrderModal";
import PortfolioModal from "./PortfolioModal";
import RulesModal from "./RulesModal";
import Sidebar from "./Sidebar";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import Portfolio from "./Portfolio";
import CardSection from "./CardSection";
import Wallet from "./Wallet";
import Order from "./Order";
import axios from "axios";
import StockHistory from "./StockHistory";
import Timer from "./Timer";
import { Offcanvas } from "react-bootstrap";

const socket = io(SERVER_URL);

const Home = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [show, setShow] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [stockHistoryModal, setStockHistoryModal] = useState(false);
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [day, setDay] = useState(
    localStorage.getItem("SEG_CURRENT_DAY")
      ? localStorage.getItem("SEG_CURRENT_DAY")
      : 0
  );
  const [round, setRound] = useState(
    localStorage.getItem("SEG_CURRENT_ROUND")
      ? localStorage.getItem("SEG_CURRENT_ROUND")
      : 0
  );
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const [shortShellDetails, setshortShellDetails] = useState([]);
  const [balance, setBalance] = useState();
  const [stockExchangeDetails, setStockExchangeDetails] = useState([]);
  const [holdings, setHoldings] = useState(0);
  const [disableOrders, setdisableOrders] = useState(true);
  const [cardReveal, setCardReveal] = useState(
    localStorage.getItem("SEG_CARD_REVEAL")
      ? localStorage.getItem("SEG_CARD_REVEAL")
      : false
  );
  const [isRoundStart, setIsRoundStart] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [companyName, setCompanyName] = useState();
  const [quantity, setQuantity] = useState(1000);
  const [userAmount, setUserAmount] = useState(0);
  const [maxQ, setMaxQ] = useState(0);
  const [maxVQ, setMaxVQ] = useState(0);
  const [price, setPrice] = useState(0);
  const [companyId, setCompanyId] = useState();
  const [bidAmount, setBidAmount] = useState(0);

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  };

  const closeModal = () => {
    setRulesModal(false);
    setOrderModal(false);
    setPortfolioModal(false);
    setExchangeModal(false);
    setStockHistoryModal(false);
  };

  const getWalletDetails = () => {
    const team_id = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/team-portfolio?team_id=${team_id}`,
    })
      .then((response) => {
        setPortfolioDetails(response.data.data);
        setBalance(response.data.available_balance);
        setshortShellDetails(response.data.short_sell);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStockExchange = () => {
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/stock-exchange?day_no=${1}`,
    })
      .then((response) => {
        // console.log("Stock Details", response.data.data);
        setStockExchangeDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrderHistory = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/team-order-history?team_id=${teamId}`,
      headers: {},
    })
      .then((response) => {
        // console.log(response.data.data);
        setOrderHistory(response.data.data);
        // toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const calMaxLot = () => {
    stockExchangeDetails.map((stock) => {
      if (companyName === stock.company_name) {
        setCompanyId(stock.id);
        setMaxQ(parseInt(stock.quantity / loggedInUsers.length));
        setPrice(parseInt(stock.price));
        setBidAmount(stock.price);
        setMaxVQ(stock.quantity);
      }
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

  const setMinBidAmount = (e) => {
    console.log(e);
    setMaxQ(e.quantity);
    setCompanyId(e.id);
  };

  const handleVeto = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/place-veto-order`,
      headers: {},
      data: {
        team_id: teamId,
        company_id: companyId,
        stock_quantity: parseInt(quantity),
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        bidding_price: userAmount,
        round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        console.log("veto ho gaya", response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          getWalletDetails();
          handleClose();
          setCompanyId("");
          setCompanyName("");
          setQuantity(0);
          setUserAmount(0);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("SEG_RULES_ACEEPT")) {
      setRulesModal(true);
    }

    if (localStorage.getItem("SEG_CARD_REVEAL")) {
      setCardReveal(true);
    }

    socket.on("connect", () => {
      // console.log(socket.id, "socketID");
    });

    socket.on("day", (data) => {
      toast.success(`Day ${data.day} Started`);
      setDay(data.day);
      localStorage.setItem("SEG_CURRENT_DAY", data.day);
    });

    socket.on("round", (data) => {
      var round;
      setOrderPlaced(false);
      if (data.round === 1 || data.round === 2 || data.round === 3) {
        round = data.round;
        setdisableOrders(false);
      } else if (data.round === 4) {
        round = "Veto Round";
        handleShow(true);
      } else if (data.round === 5) {
        round = "Special round";
      }
      setIsRoundStart(true);
      setTimeout(() => {
        setIsRoundStart(false);
        setdisableOrders(true);
      }, ROUND_DELAY * 1000);
      toast.success(`Round ${round} Started`);
      setRound(data.round);
      localStorage.setItem("SEG_CURRENT_ROUND", data.round);
    });

    socket.on("market", (data) => {
      setCardReveal(true);
      toast.success(`Market Start`);
      localStorage.setItem("SEG_CARD_REVEAL", true);
    });
    socket.on("change", (data) => {
      // console.log(data, "loggedin Teams");
      setLoggedInUsers(data);
    });

    return () => {
      socket.off("day");
      socket.off("round");
      socket.off("market");
    };
  }, []);

  useEffect(() => {
    var temp = 0;
    portfolioDetails.map((elem) => {
      temp += elem.holded_stock * elem.current_price;
    });
    setHoldings(temp);
  }, [portfolioDetails]);

  useEffect(() => {
    getWalletDetails();
    getStockExchange();
    getOrderHistory();
  }, [day]);

  useEffect(() => {
    calMaxLot();
  }, [companyName]);

  const handlePass = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/pass-order`,
      headers: {},
      data: {
        team_id: teamId,
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        // console.log(response);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders();
        getOrderHistory();
        setdisableOrders(true);
        setOrderPlaced(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid page-wrapper">
        <div className="dynamic_island">
          <div className="d-flex justify-content-between">
            <div className="">Day {day}</div>
            <div className="" style={{ fontSize: "18px", fontWeight: "500" }}>
              {isRoundStart ? (
                <Timer
                  seconds={ROUND_DELAY}
                  setIsRoundStart={() => setIsRoundStart(false)}
                  handlePass={handlePass}
                  orderPlaced={orderPlaced}
                  round={round}
                />
              ) : (
                "00:00"
              )}
            </div>
            <div className="">Round-{round}</div>
          </div>
        </div>
        <Sidebar
          setOrderModal={setOrderModal}
          setPortfolioModal={setPortfolioModal}
          setExchangeModal={setExchangeModal}
          setRulesModal={setRulesModal}
          setStockHistoryModal={setStockHistoryModal}
          day={day}
          cardReveal={cardReveal}
          handleShow={() => handleShow()}
        />
        <div className="containers  ">
          <div className="main_section">
            <div className="row">
              <div className="col-lg-9">
                <Portfolio
                  portfolioDetails={portfolioDetails}
                  stockExchangeDetails={stockExchangeDetails}
                  shortShellDetails={shortShellDetails}
                />
                <CardSection
                  day={day}
                  round={round}
                  cardReveal={cardReveal}
                  stockExchangeDetails={stockExchangeDetails}
                  getWalletDetails={getWalletDetails}
                />
              </div>
              <div className="col-lg-3 p-0">
                <Wallet balance={balance} portfolioDetails={portfolioDetails} />
                <Order
                  stockDetails={stockExchangeDetails}
                  getWalletDetails={getWalletDetails}
                  setdisableOrders={() => setdisableOrders(true)}
                  disableOrders={disableOrders}
                  getOrderHistory={getOrderHistory}
                  handlePass={handlePass}
                  loggedInUsers={loggedInUsers}
                  orderIsPlaced={() => {
                    setOrderPlaced(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesModal rulesModal={rulesModal} closeModal={closeModal} />
      <OrderModal
        orderModal={orderModal}
        closeModal={closeModal}
        orderHistory={orderHistory}
      />
      <PortfolioModal
        portfolioModal={portfolioModal}
        closeModal={closeModal}
        portfolioDetails={portfolioDetails}
        shortShellDetails={shortShellDetails}
      />
      <ExchangeModal
        exchangeModal={exchangeModal}
        closeModal={closeModal}
        stockExchangeDetails={stockExchangeDetails}
      />
      <StockHistory
        stockHistoryModal={stockHistoryModal}
        closeModal={closeModal}
        stockExchangeDetails={stockExchangeDetails}
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b>Veto Order</b>{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
              <option value="0" selected>
                Select company
              </option>
              {stockExchangeDetails.map((company) => (
                <option value={company.name}>{company.company_name}</option>
              ))}
            </select>
            <p
              className={`mb-2 text-dark d-${companyName ? "block" : "none"}`}
              style={{ fontSize: "10px", fontWeight: "700" }}
            >
              Max Quantity:{" "}
              <span className="text-warning me-2">
                {toIndianCurrency(maxVQ)}
              </span>{" "}
              Share Price:{" "}
              <span className="text-warning">{toIndianCurrency(price)}</span>
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
                max={maxVQ}
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
              className="form-control mb-2"
              style={{
                backgroundColor: "#d2f9f7",
              }}
              onChange={(e) => setUserAmount(e.target.value)}
              value={userAmount}
              min={(price * 90) / 100}
              type="number"
              name="Total"
              id="Totala"
              placeholder="Enter Your Bidding Price"
            />
            <p
              className={`mb-2 text-dark d-${companyName ? "block" : "none"}`}
              style={{ fontSize: "10px", fontWeight: "700" }}
            >
              Minimun Bid Amount:{" "}
              <span className="text-warning me-2">
                {toIndianCurrency((bidAmount * 90) / 100)}
              </span>{" "}
            </p>

            <div
              className={`mb-2 text-dark d-${
                companyName ? "block" : "none"
              } mt-3 pt-2`}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                borderTop: "2px dashed grey",
              }}
            >
              Total Amount:{" "}
              <span className="text-warning me-2">
                {toIndianCurrency(((userAmount * 90) / 100) * quantity)}
              </span>{" "}
            </div>
          </div>
          <div
            className="btn btn-success"
            onClick={handleVeto}
            style={{
              position: "absolute",
              width: "94%",
              left: "10px",
              bottom: "10px",
            }}
          >
            Place Order
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
