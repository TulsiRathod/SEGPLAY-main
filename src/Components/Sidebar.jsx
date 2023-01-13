import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Baseurl";
import DayNews from "./DayNews";

const Sidebar = ({
  setOrderModal,
  setPortfolioModal,
  setExchangeModal,
  setRulesModal,
  setStockHistoryModal,
  cardReveal,
  setShowVeto,
}) => {
  const nav = useNavigate();
  const [news, setNews] = useState({});
  const day = localStorage.getItem("SEG_CURRENT_DAY");
  const logout = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/logout`,
      data: {
        teamid: teamId,
      },
    })
      .then((response) => {
        // console.log("Success", response);
        toast.success(response.data.message);
        localStorage.clear();
        nav("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  const showNews = () => {
    let arr = [];
    for (let i = 1; i <= day; i++) {
      arr.push(JSON.parse(localStorage.getItem(`SEG_NEWS_${i}`)));
      // console.log("show",arr);
    }
    setNews(arr.reverse());
  };

  const getNews = () => {
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/getNews?day=${day}`,
    })
      .then((response) => {
        localStorage.setItem(
          `SEG_NEWS_${day}`,
          JSON.stringify(response.data.news)
        );
        showNews();
      })
      .catch((error) => {
        console.log("fail", error);
      });
  };

  useEffect(() => {
    if (
      localStorage.getItem(`SEG_NEWS_${day}`) === null ||
      day !== 0 ||
      day !== null
    ) {
      getNews();
    }
  }, [day]);

  useEffect(() => {
    showNews();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="navibar d-block">
          <nav className="d-flex flex-column h-100">
            <div className="mb-5">
              <ul className="list-unstyled text-center mb-5">
                <li
                  onClick={() => {
                    setExchangeModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa-solid fa-right-left"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Stock Exchnage"
                    ></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setPortfolioModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa-regular fa-id-card-clip "
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Portfolio"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setOrderModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa-solid fa-chart-line "
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Order History"
                      style={{ fontSize: "15px" }}
                    ></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setStockHistoryModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa fa-history"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Stock Exchnage History"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setRulesModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa-solid fa-square-info mb-0"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Rules"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom_menu d-flex h-100">
              <ul className="list-unstyled text-center align-self-start mt-auto mb-0">
                <li>
                  <a>
                    <img
                      src="../assets/man.png"
                      width="30"
                      style={{ paddingTop: "20px" }}
                    />
                  </a>
                </li>
                <li style={{ paddingTop: "20px" }}>
                  <a onClick={logout}>
                    <i
                      className="fa-solid fa-power-off"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Logout"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="newsbar">
          <section>
            <h3 className="mt-1">News</h3>
            <hr style={{ width: "calc(100% - 10px)" }} />
            <div
              style={{ overflowY: "hidden", height: " calc(100vh - 120px) " }}
              className="d-flex flex-column"
            >
              <div
                className="accordion accordion-flush pe-1"
                id="accordionFlushExample "
              >
                <div className="accordion" id="accordionExample">
                  <DayNews news={news} day={day} cardReveal={cardReveal} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
