import axios from "axios";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
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
  day,
  cardReveal,
  news,
  handlePriceReveal,
  handleShow,
}) => {
  const nav = useNavigate();
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

  return (
    <>
      <div className="sidebar">
        <div className="navibar d-block">
          <nav className="d-flex flex-column h-100">
            <div className="mb-5">
              <ul className="list-unstyled text-center mb-5">
                <li
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStockHistoryModal(true);
                    handlePriceReveal(localStorage.getItem("SEG_CURRENT_DAY"));
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
                  style={{ cursor: "pointer" }}
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

                {/* <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleShow();
                  }}
                >
                  <a>V</a>
                </li> */}
              </ul>
            </div>

            <div className="bottom_menu d-flex h-100">
              <ul className="list-unstyled text-center align-self-start mt-auto mb-0">
                <li style={{ cursor: "pointer" }}>
                  <a>
                    <img
                      src="../assets/man.png"
                      width="30"
                      style={{ paddingTop: "20px" }}
                    />
                  </a>
                </li>
                <li style={{ paddingTop: "20px", cursor: "pointer" }}>
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
            {/* <hr style={{ width: "calc(100% - 10px)" }} /> */}
            <div
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: " calc(100vh - 120px) ",
              }}
            >
              <div
                className="accordion accordion-flush w-100"
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
