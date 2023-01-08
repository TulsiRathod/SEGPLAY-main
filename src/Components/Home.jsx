import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Baseurl";
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
const socket = io(SERVER_URL);

const Home = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [stockHistoryModal, setStockHistoryModal] = useState(false);
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
  const [balance, setBalance] = useState();
  const [stockExchangeDetails, setStockExchangeDetails] = useState([]);
  const [holdings, setHoldings] = useState(0);
  const [cardReveal, setCardReveal] = useState(
    localStorage.getItem("SEG_CARD_REVEAL")
      ? localStorage.getItem("SEG_CARD_REVEAL")
      : false
  );

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

  useEffect(() => {
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
      if (data.round === 1 || data.round === 2 || data.round === 3) {
        round = data.round;
      } else if (data.round === 4) {
        round = "Veto Round";
      } else if (data.round === 5) {
        round = "Special round";
      }

      toast.success(`Round ${round} Started`);
      setRound(data.round);
      localStorage.setItem("SEG_CURRENT_ROUND", data.round);
    });

    socket.on("reveal", (data) => {
      setCardReveal(true);
      toast.success(`Card Reveal`);
    });

    return () => {
      socket.off("day");
      socket.off("round");
      socket.off("reveal");
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

  return (
    <>
      <div className="container-fluid page-wrapper">
        <div className="dynamic_island">
          <div className="row">
            <div className="col-lg-4">Day {day}</div>
            <div
              className="col-lg-4"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              00:00
            </div>
            <div className="col-lg-4">Round-{round}</div>
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
        />
        <div className="containers  ">
          <div className="main_section">
            <div className="row">
              <div className="col-lg-9">
                <Portfolio portfolioDetails={portfolioDetails} />
                <CardSection day={day} round={round} cardReveal={cardReveal} />
              </div>
              <div className="col-lg-3 p-0">
                <Wallet balance={balance} portfolioDetails={portfolioDetails} />
                <Order
                  stockDetails={stockExchangeDetails}
                  getWalletDetails={getWalletDetails}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesModal rulesModal={rulesModal} closeModal={closeModal} />
      <OrderModal orderModal={orderModal} closeModal={closeModal} />
      <PortfolioModal
        portfolioModal={portfolioModal}
        closeModal={closeModal}
        portfolioDetails={portfolioDetails}
      />
      <ExchangeModal
        exchangeModal={exchangeModal}
        closeModal={closeModal}
        stockExchangeDetails={stockExchangeDetails}
      />
      <StockHistory
        stockHistoryModal={stockHistoryModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default Home;
