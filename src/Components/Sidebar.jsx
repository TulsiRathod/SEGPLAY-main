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
}) => {
  const nav = useNavigate();
  const [news, setNews] = useState({});
  const day=localStorage.getItem("SEG_CURRENT_DAY");
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
        localStorage.removeItem("SEG_TEAM_ID");
        nav("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const getNews = () => {
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/getNews?day=${day}`,
    })
      .then((response) => {
        console.log("Success", response.data.news);
        localStorage.setItem(
          `SEG_NEWS_${day}`,
          JSON.stringify(response.data.news)
        );
      })
      .catch((error) => {
        console.log("fail", error);
      });
  };

  const showNews = () => {
    let arr = [];
    for (let i = 1; i <= day; i++) {
      arr.push(JSON.parse(localStorage.getItem(`SEG_NEWS_${i}`)));
      // console.log(news);
    }
    setNews(arr.reverse());
  };

  useEffect(() => {
    if (localStorage.getItem(`SEG_NEWS_${day}`) === null && day != 0) {
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
                <li>
                  <a>
                    <i className="fa-solid fa-screen-users"></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setExchangeModal(true);
                  }}
                >
                  <a>
                    <i className="fa-solid fa-right-left"></i>
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
                      style={{ fontSize: "16px" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom_menu d-flex h-100">
              <ul className="list-unstyled text-center align-self-start mt-auto mb-0">
                <li
                  onClick={() => {
                    setOrderModal(true);
                  }}
                >
                  <a>
                    <i
                      className="fa-solid fa-chart-line "
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
                      style={{ fontSize: "18px" }}
                    ></i>
                  </a>
                </li>

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
                      style={{ fontSize: "18px" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="newsbar">
          <div class="accordion" id="accordionExample">
            <DayNews news={news} day={day} />
          </div>
          {/* <section>
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
                <DayNews news={news} day={day} />
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
