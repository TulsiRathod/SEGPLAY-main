import React, { useEffect, useRef, useState } from "react";
import { ROUND_DELAY, SERVER_URL, toIndianCurrency } from "../Baseurl";
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
import SpecialCardUsed from "./SpecialCardUsed";
import Swal from "sweetalert2";
import ShortSellModal from "./ShortSellModal";
import ShortSellHistoryModal from "./ShortSellHistory";
import SpecialCardsHistoryModal from "./SpecialCardHistory";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const socket = io(SERVER_URL);

const Home = () => {
  const nav = useNavigate();
  const [rulesModal, setRulesModal] = useState(false);
  const [show, setShow] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [stockHistoryModal, setStockHistoryModal] = useState(false);
  const [shortSellModal, setShortSellModal] = useState(false);
  const [stockHistoryDetails, setStockHistoryDetails] = useState([]);
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
  const [userAmount, setUserAmount] = useState();
  const [maxVQ, setMaxVQ] = useState(0);
  const [price, setPrice] = useState(0);
  const [companyId, setCompanyId] = useState("");
  const [bidAmount, setBidAmount] = useState(0);
  const [news, setNews] = useState({});
  const [scModal, setScModal] = useState(false);
  const [ImpactCards, setImpactCards] = useState([]);
  const [shortSellDetail, setShortSellDetail] = useState([]);
  const [passRes, setPassRes] = useState(false);
  const [vetoResponse, setVetoResponse] = useState(false);
  const [specialUse, setSpecialUse] = useState(true);
  const [shortSellHistoryModal, setShortSellHistoryModal] = useState(false);
  const [specialCardsHistoryModal, setSpecialCardsHistoryModal] =
    useState(false);
  const [specialCardsHistory, setSpecialCardsHistory] = useState([]);
  const [shortSellHistory, setShortSellHistory] = useState([]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const getShortSellDetails = () => {
    const team_id = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      data: {
        day_no: localStorage.getItem("SEG_CURRENT_DAY"),
        team_id: team_id,
      },
      url: `${SERVER_URL}api/main/get-current-day-short-sell`,
    })
      .then((response) => {
        // console.log(response, "shortSelldata");
        setShortSellDetail(response.data.data);
        if (response.data.data.length === 0) {
          setShortSellModal(false);
        } else {
          setShortSellModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setRulesModal(false);
    setOrderModal(false);
    setPortfolioModal(false);
    setExchangeModal(false);
    setStockHistoryModal(false);
    setScModal(false);
    setShortSellModal(false);
    setShortSellHistoryModal(false);
    setSpecialCardsHistoryModal(false);
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

  const CardImpact = () => {
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/get-card-imapct?day_no=${day}&round_no=5`,
    })
      .then((response) => {
        console.log(response.data.data);
        setImpactCards(response.data.data);
        if (response.data.data.length > 0) {
          setScModal(true);
        }
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
        setPrice(parseInt(stock.price));
        setBidAmount(stock.price);
        setMaxVQ(stock.quantity);
      }
    });
  };

  const handleVetoIncrease = () => {
    if (quantity + 1000 < maxVQ) {
      setQuantity(quantity + 1000);
    } else {
      toast("Can't Increase Quantity");
    }
  };

  const handleVetoDecrease = () => {
    if (quantity - 1000 > 0) {
      setQuantity(quantity - 1000);
    } else {
      toast("Quantity can't less than 0");
    }
  };

  const handleVeto = () => {
    setVetoResponse(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    if (userAmount < (bidAmount * 90) / 100) {
      toast.error("Invalid Bid Amount");
      setVetoResponse(false);

      return;
    }
    if (((userAmount * 90) / 100) * quantity > balance) {
      toast.error("Insufficient Cash Balance.");
      setVetoResponse(false);
      return;
    }
    if (companyId === "") {
      setVetoResponse(false);
      toast.error("Please select the company first.");
      return;
    }
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/place-veto-order`,
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
        // console.log("veto ho gaya", response.data);
        if (response.data.success) {
          setVetoResponse(false);
          setOrderPlaced(true);
          localStorage.setItem("VETO_ORDER_ID", response.data.data.OrderId);
          localStorage.setItem(
            "VETO_ORDER_COUNT",
            Number(localStorage.getItem("VETO_ORDER_COUNT")) + 1
          );
          toast.success(response.data.message);
          getWalletDetails();
          handleClose();
          setCompanyId("");
          setCompanyName("");
          setQuantity(0);
          setUserAmount();
        }
      })
      .catch((error) => {
        console.log(error);
        setVetoResponse(false);

        toast.error(error.response.data.message);
      });
  };

  const handleVetoWinner = () => {
    if (localStorage.getItem("VETO_ORDER_ID")) {
      axios({
        method: "post",
        url: `${SERVER_URL}api/main/winner-status`,
        data: { order_id: localStorage.getItem("VETO_ORDER_ID") },
      })
        .then((response) => {
          console.log("veto winner", response.data);
          if (response.data.data.execution === 2) {
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "Your Veto Order has been executed",
              timer: 4000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    }
  };

  const handlePriceReveal = () => {
    setStockHistoryModal(true);
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/get-stock-price`,
    })
      .then((response) => {
        setStockHistoryDetails(response.data.data);
        // console.log("stock exchange history", response);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handlePass = () => {
    setPassRes(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/pass-order`,
      data: {
        team_id: teamId,
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        setPassRes(false);
        toast.success(response.data.message);
        getWalletDetails();
        setdisableOrders(true);
        setOrderPlaced(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const getNews = () => {
    if (day > 0) {
      const teamId = localStorage.getItem("SEG_TEAM_ID");
      axios({
        method: "get",
        url: `${SERVER_URL}api/main/getNews?day=${day}&teamid=${teamId}`,
      })
        .then((response) => {
          setNews(response.data.news);
          localStorage.setItem("SEG_NEWS", JSON.stringify(response.data.news));
          // console.log(response.data.news);
        })
        .catch((error) => {
          console.log("fail", error);
        });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openSpecialCardHistory = () => {
    setSpecialCardsHistoryModal(true);
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/get-special-card-used`,
    })
      .then((response) => {
        setSpecialCardsHistory(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };
  const openShortSellHistory = () => {
    setShortSellHistoryModal(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/get-short-sell-history?team_id=${teamId}`,
    })
      .then((response) => {
        setShortSellHistory(response.data.data);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);

    if (!localStorage.getItem("SEG_RULES_ACEEPT")) {
      setRulesModal(true);
    }

    if (localStorage.getItem("SEG_CARD_REVEAL")) {
      setCardReveal(true);
    }

    socket.on("day", (data) => {
      // toast.success(`Day ${data.day} Started`);
      setSpecialUse(false);
      Swal.fire({
        icon: "success",
        title: `Day ${data.day} Started`,
        text: "Hold Tight And Have Fun.",
        timer: 3000,
      });
      setDay(data.day);
      localStorage.setItem("SEG_CURRENT_DAY", data.day);
    });

    socket.on("round", (data) => {
      var round;
      setOrderPlaced(false);
      if (data.round === 1 || data.round === 2 || data.round === 3) {
        round = `Round ${data.round}`;
        setdisableOrders(false);
      } else if (data.round === 4) {
        round = "Veto Round";
        handleShow();
      } else if (data.round === 5) {
        round = "Special Round";
        setSpecialUse(true);
      }
      setIsRoundStart(true);
      setTimeout(() => {
        setIsRoundStart(false);
        setdisableOrders(true);
      }, ROUND_DELAY * 1000);
      toast.success(`${round} Started`);
      setRound(data.round);
      localStorage.setItem("SEG_CURRENT_ROUND", data.round);
    });

    socket.on("market", (data) => {
      if (data.isStarted === 1 && data.priceReveal === false) {
        // toast.success(`Market Start`);
        Swal.fire({
          title: "Market Started!",
          imageUrl: "../assets/business-team.gif",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          timer: 3000,
        });
        setTimeout(() => {
          handlePriceReveal(day);
        }, 3000);
        setCardReveal(true);
        localStorage.setItem("SEG_CARD_REVEAL", true);
      }
      if (data.isStarted === 0 && data.priceReveal === true) {
        handleVetoWinner();
        handlePriceReveal(day + 1);
        getWalletDetails();
        getStockExchange();
      }
      if (data.isStarted === 0 && data.priceReveal === false) {
        Swal.fire({
          icon: "error",
          title: "Market Closed",
          timer: 3000,
        });
      }
    });
    socket.on("change", (data) => {
      setLoggedInUsers(data);
    });

    socket.on("day_end_short_sell_settle", (data) => {
      if (data.isDayEnd) {
        localStorage.removeItem("VETO_ORDER_ID");
        Swal.fire({
          icon: "error",
          title: `Day ${localStorage.getItem("SEG_CURRENT_DAY")} Ended.`,
          timer: 3000,
        });
        setRound(0);
        setCardReveal(false);
        localStorage.setItem("SEG_CARD_REVEAL", false);
      }
      if (data.isShortSellSettled) {
        getShortSellDetails();
        getWalletDetails();
        getStockExchange();
      }
      if (data.gameEnd) {
        setTimeout(() => {
          nav("/Leaderboard");
        }, 4000);
      }
    });

    return () => {
      socket.off("day");
      socket.off("round");
      socket.off("market");
      socket.off("change");
      socket.off("day_end_short_sell_settle");
      window.removeEventListener("beforeunload", unloadCallback);
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
  }, [day]);

  useEffect(() => {
    calMaxLot();
  }, [companyName]);

  useEffect(() => {
    setUserAmount((bidAmount * 90) / 100);
  }, [bidAmount]);

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
                  setRound={setRound}
                  CardImpact={CardImpact}
                  handleClose={handleClose}
                  setSpecialUse={setSpecialUse}
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
          round={round}
          cardReveal={cardReveal}
          handleShow={() => handleShow()}
          news={news}
          handlePriceReveal={handlePriceReveal}
          getOrderHistory={getOrderHistory}
          getStockExchange={getStockExchange}
          openShortSellHistory={openShortSellHistory}
          openSpecialCardHistory={openSpecialCardHistory}
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
                  portfolioDetails={portfolioDetails}
                  getNews={getNews}
                  disableOrders={disableOrders}
                  setdisableOrders={setdisableOrders}
                  setOrderPlaced={setOrderPlaced}
                  setSpecialUse={setSpecialUse}
                  specialUse={specialUse}
                />
              </div>
              <div className="col-lg-3 p-0">
                <Wallet
                  balance={balance}
                  portfolioDetails={portfolioDetails}
                  shortShellDetails={shortShellDetails}
                />
                <Order
                  stockDetails={stockExchangeDetails}
                  getWalletDetails={getWalletDetails}
                  setdisableOrders={setdisableOrders}
                  disableOrders={disableOrders}
                  handlePass={handlePass}
                  loggedInUsers={loggedInUsers}
                  setOrderPlaced={setOrderPlaced}
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
        stockHistoryDetails={stockHistoryDetails}
        closeModal={closeModal}
        stockExchangeDetails={stockExchangeDetails}
      />
      <SpecialCardUsed
        ImpactCards={ImpactCards}
        scModal={scModal}
        closeModal={closeModal}
      />

      <ShortSellModal
        shortSellModal={shortSellModal}
        closeModal={closeModal}
        shortSellDetail={shortSellDetail}
      />

      <ShortSellHistoryModal
        shortSellHistoryModal={shortSellHistoryModal}
        closeModal={closeModal}
        shortSellHistory={shortSellHistory}
      />

      <SpecialCardsHistoryModal
        specialCardsHistoryModal={specialCardsHistoryModal}
        closeModal={closeModal}
        specialCardsHistory={specialCardsHistory}
      />

      <Offcanvas show={show}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <b>Veto Order</b>{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Number(localStorage.getItem("VETO_ORDER_COUNT")) !== 2 ? (
            <>
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
                  className={`mb-2 text-dark d-${
                    companyName ? "block" : "none"
                  }`}
                  style={{ fontSize: "12px", fontWeight: "700" }}
                >
                  Max Quantity:{" "}
                  <span className="text-warning me-2">
                    {
                      toIndianCurrency(Math.floor(maxVQ / 1000) * 1000)
                        .substring(1)
                        .split(".")[0]
                    }
                  </span>
                  {/* <br /> */}
                  Share Price:{" "}
                  <span className="text-warning">
                    {toIndianCurrency(price)}
                  </span>
                </p>
                <div className="row">
                  <input
                    type="button"
                    value="-"
                    className="col-2 mb-3"
                    style={{ margin: "0 10px" }}
                    onClick={handleVetoDecrease}
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
                    onClick={handleVetoIncrease}
                  />
                </div>
                <input
                  className="form-control mb-2"
                  style={{
                    backgroundColor: "#d2f9f7",
                  }}
                  onChange={(e) => {
                    setUserAmount(e.target.value);
                  }}
                  value={userAmount ? parseInt(userAmount) : ""}
                  min={(bidAmount * 90) / 100}
                  type="number"
                  name="Total"
                  id="Totala"
                  placeholder="Enter Your Bidding Price"
                />
                <p
                  className={`mb-2 text-dark d-${
                    companyName ? "block" : "none"
                  }`}
                  style={{ fontSize: "12px", fontWeight: "700" }}
                >
                  Minimun Bid Amount:{" "}
                  <span className="text-warning me-2">
                    {toIndianCurrency((bidAmount * 90) / 100).split(".")[0]}
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
              <button
                className="btn btn-success"
                onClick={handleVeto}
                style={{
                  position: "absolute",
                  width: "94%",
                  left: "10px",
                  bottom: "60px",
                }}
              >
                {vetoResponse ? "Loading..." : "Place Order"}
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handlePass();
                  handleClose();
                }}
                style={{
                  position: "absolute",
                  width: "94%",
                  left: "10px",
                  bottom: "10px",
                }}
              >
                {passRes ? "Loading..." : "Pass"}
              </button>
            </>
          ) : (
            <div className="">
              <p>You have utilized all your veto order credit</p>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handlePass();
                  handleClose();
                }}
                style={{
                  position: "absolute",
                  width: "94%",
                  left: "10px",
                  bottom: "80%",
                }}
              >
                Pass
              </button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
