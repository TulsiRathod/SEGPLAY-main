import axios from "axios";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Baseurl";
import DayNews from "./DayNews";
import * as Bi from "react-icons/bi";
import * as Fi from "react-icons/fa";
import * as Ri from "react-icons/ri";
import { Tooltip } from "@mui/material";

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
  getOrderHistory,
  getStockExchange,
}) => {
  const nav = useNavigate();
  const logout = () => {
    if (window.confirm("Are You Sure?")) {
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
    }
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
                    getStockExchange();
                  }}
                  className="mb-3"
                >
                  <Tooltip
                    title="Stock Exchange"
                    color="black"
                    placement="right"
                    arrow
                  >
                    <a>
                      <Fi.FaChartLine size={20} color="white" />
                    </a>
                  </Tooltip>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPortfolioModal(true);
                  }}
                  className="mb-3"
                >
                  <Tooltip
                    title="Portfolio"
                    color="black"
                    placement="right"
                    arrow
                  >
                    <a>
                      <Bi.BiUserCircle size={25} color="white" />
                    </a>
                  </Tooltip>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOrderModal(true);
                    getOrderHistory();
                  }}
                  className="mb-3"
                >
                  <Tooltip
                    title="Order History"
                    color="black"
                    placement="right"
                    arrow
                  >
                    <a>
                      <Bi.BiHistory size={25} color="white" />
                    </a>
                  </Tooltip>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStockHistoryModal(true);
                    handlePriceReveal();
                  }}
                  className="mb-3"
                >
                  <Tooltip
                    title="Price History"
                    color="black"
                    placement="right"
                    arrow
                  >
                    <a>
                      <Ri.RiStockLine size={25} color="white" />
                    </a>
                  </Tooltip>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setRulesModal(true);
                  }}
                  className="mb-3"
                >
                  <Tooltip title="Rules" color="black" placement="right" arrow>
                    <a>
                      <Bi.BiInfoCircle size={25} color="white" />
                    </a>
                  </Tooltip>
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
                  <Tooltip title="Logout" color="black" placement="right" arrow>
                    <a onClick={logout}>
                      <Bi.BiLogOut size={25} color="white" />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="newsbar">
          <section>
            <h3
              className="mt-1 pb-1"
              style={{ borderBottom: "2px solid grey" }}
            >
              News
            </h3>
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
