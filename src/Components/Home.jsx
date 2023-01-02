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
const socket = io(SERVER_URL);

const Home = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [day, setDay] = useState(1);
  const [round, setRound] = useState(1);
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const [balance, setBalance] = useState();
  const [stockExchangeDetails, setStockExchangeDetails] = useState([]);
  const [holdings, setHoldings] = useState(0);

  const closeModal = () => {
    setRulesModal(false);
    setOrderModal(false);
    setPortfolioModal(false);
    setExchangeModal(false);
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
      url: `${SERVER_URL}api/main/stock-exchange?day_no=${day}`,
    })
      .then((response) => {
        // console.log("Stock Details",  response.data.data);
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
      toast.success(`Round ${data.round} Started`);
      setRound(data.round);
      localStorage.setItem("SEG_CURRENT_ROUND", data.round);
    });

    return () => {
      socket.off("day");
      socket.off("round");
    };
  }, []);

  useEffect(()=>{
    var temp=0;
    portfolioDetails.map((elem)=>{
      temp+=(elem.holded_stock*elem.current_price);
  })
    setHoldings(temp);
  },[portfolioDetails]);

  useEffect(() => {
    getWalletDetails();
    getStockExchange();
  }, []);

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
            <div className="col-lg-4">Round-1</div>
          </div>
        </div>
        <Sidebar
          setOrderModal={setOrderModal}
          setPortfolioModal={setPortfolioModal}
          setExchangeModal={setExchangeModal}
          setRulesModal={setRulesModal}
          day={day}
        />
        <div className="containers  ">
          <div className="main_section">
            <div className="row">
              <div className="col-lg-9">
                <Portfolio portfolioDetails={portfolioDetails} />
                <CardSection day={day} round={round}/>
              </div>
              <div className="col-lg-3 p-0">
                <div className="wallet">
                  <h3>
                    <img
                      src="../assets/coin.png"
                      width="25"
                      style={{ marginRight: "7px" }}
                      alt=""
                    />
                    Wallet
                  </h3>
                  <hr />
                  <div>
                    <div className="balance">
                      <p>Available balance</p>
                      <h4>
                        Rs. <span>{balance}</span>
                      </h4>
                    </div>
                    <div className="balance">
                      <p>Holdings</p>
                      <h4>
                        Rs. <span>{holdings}</span>
                      </h4>
                    </div>
                    <hr
                      style={{
                        borderTopStyle: "dashed",
                        borderTopWidth: "5px",
                        margin: " 12px 0px 0px !important",
                      }}
                    />
                    <div className="balance">
                      <p>Total Networth</p>
                      <h4>
                        Rs. <span>{balance + holdings}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <Order />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesModal rulesModal={rulesModal} closeModal={closeModal} />
      <OrderModal orderModal={orderModal} closeModal={closeModal} />
      <PortfolioModal portfolioModal={portfolioModal} closeModal={closeModal} />
      <ExchangeModal
        exchangeModal={exchangeModal}
        closeModal={closeModal}
        stockExchangeDetails={stockExchangeDetails}
      />
    </>
  );
};

export default Home;
