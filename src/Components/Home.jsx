import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExchangeModal from "./ExchangeModal";
import OrderModal from "./OrderModal";
import PortfolioModal from "./PortfolioModal";
import RulesModal from "./RulesModal";

const Home = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);

  const closeModal = () => {
    setRulesModal(false);
    setOrderModal(false);
    setPortfolioModal(false);
    setExchangeModal(false);
  };

  // useEffect(()=>{
  //   setRulesModal(true);
  // },[]);

  return (
    <>
      <div className="container-fluid page-wrapper">
        <div className="dynamic_island">
          <div className="row">
            <div className="col-lg-4">Day 7</div>
            <div
              className="col-lg-4"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              00:00
            </div>
            <div className="col-lg-4">Round-1</div>
          </div>
        </div>
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
                  <li  onClick={() => {
                    setPortfolioModal(true);
                  }}>
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
                    setExchangeModal(true);
                  }}
                  >
                    <a>
                      <i className="fa-solid fa-right-left"></i>
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
                  <li 
                  >
                    <a>
                      <img
                        src="../assets/man.png"
                        width="30"
                        style={{ paddingTop: "20px" }}
                      />
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
                  <div className="accordion-item">
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        data-parent="#accordionFlushExample"
                        aria-controls="flush-collapseOne"
                        style={{ fontSize: "14px" }}
                      >
                        Day 1
                      </button>
                    </h2>
                  </div>

                  <div className="accordion-item">
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        data-parent="#accordionFlushExample"
                        aria-controls="panelsStayOpen-collapseTwo"
                        style={{ fontSize: "14px" }}
                      >
                        Day 2
                      </button>
                    </h2>
                  </div>
                  <div className="accordion-item">
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex align-items-center justify-content-center">
                            <div>
                              <img
                                src="../assets/profile.png"
                                alt=""
                                width="50px"
                                height="50px"
                              />
                            </div>
                            <div className="ps-2" style={{ fontSize: "13px" }}>
                              Jainam IPO is Going to Launch in Third Round
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        data-parent="#accordionFlushExample"
                        aria-controls="panelsStayOpen-collapseThree"
                        style={{ fontSize: "14px" }}
                      >
                        Day 3
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="containers  ">
          <div className="main_section">
            <div className="row">
              <div className="col-lg-9">
                <div className="portfolio ">
                  <div
                    className="row justify-content-center"
                    style={{ height: "calc(50vh - 60px)" }}
                  >
                    <div className="col-6 d-flex">
                      <img
                        src="../assets/graph.png"
                        style={{
                          borderRadius: "15px",
                          width: "100%",
                          margin: "auto",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="col-6 p-2">
                      <div className="px-3 portfolio_tbl_wrapper">
                        <h3 className="mb-0">Portfolio</h3>
                        <hr className="mt-2" />

                        <table id="portfolio_tbl">
                          <tr>
                            <th>Company</th>
                            <th style={{ textAlign: "center" }}>Last Price</th>
                            <th style={{ textAlign: "end" }}>Quantity</th>
                          </tr>
                          <tr>
                            <td>
                              <h5>NFLX</h5>
                              Netflix, Inc.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <p>$250.00</p>
                            </td>
                            <td style={{ textAlign: "end" }}>
                              <p>50K</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>NFLX</h5>
                              Netflix, Inc.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <p>$250.00</p>
                            </td>
                            <td style={{ textAlign: "end" }}>
                              <p>50K</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>NFLX</h5>
                              Netflix, Inc.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <p>$250.00</p>
                            </td>
                            <td style={{ textAlign: "end" }}>
                              <p>50K</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>NFLX</h5>
                              Netflix, Inc.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <p>$250.00</p>
                            </td>
                            <td style={{ textAlign: "end" }}>
                              <p>50K</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-section">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle"></i>
                              <span>+Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle down"></i>
                              <span>-Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle down"></i>
                              <span>-Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle down"></i>
                              <span>-Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="seg_card">
                        <div className="card_content">
                          <div className="card__face front">
                            <img src="../assets/BullBear.png" alt="" />
                          </div>
                          <div className="card__face back">
                            <img
                              src="../assets/profile.png"
                              alt=""
                              width="40px"
                              height="40px"
                            />
                            <div className="card_sign">
                              <i className="fa-sharp fa-solid fa-triangle down"></i>
                              <span>-Rs. 324/-</span>
                              <p>
                                Jainam IPO is Going to Collabrate with VNSGU
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        Rs. <span>14,00,000</span>
                      </h4>
                    </div>
                    <div className="balance">
                      <p>Holdings</p>
                      <h4>
                        Rs. <span>13,00,000</span>
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
                        Rs. <span>27,00,000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="order">
                  <h3
                    className="mt-1"
                    style={{ marginBottom: "calc(15vh - 75px)" }}
                  >
                    Order
                  </h3>
                  <form id="order_share" action="#">
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="company"
                      id="company"
                    >
                      <option value="0">Select company</option>
                      <option value="1">Netflix</option>
                      <option value="2">Tata</option>
                      <option value="3">Infosys</option>
                      <option value="4">Jainam</option>
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="qty"
                      id="qty"
                    >
                      <option value="0">Select share quantity</option>
                      <option value="500">500</option>
                    </select>
                    <input
                      className="form-control"
                      style={{ marginBottom: "calc(15vh - 46px)" }}
                      type="text"
                      name="TotalA"
                      id="TotalA"
                      placeholder="Total Amount"
                    />
                    <div className="row">
                      <div className="col-lg-7 mb-1">
                        <button type="button" className="bn bn-red">
                          SELL
                        </button>
                      </div>
                      <div className="col-lg-5 ps-0 mb-1">
                        <button type="button" className="bn bn-green">
                          BUY
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 mt-1">
                        <button type="button" className="bn bn-clear">
                          PASS
                        </button>
                      </div>
                      <div className="col-lg-7 ps-0 mt-1">
                        <button type="button" className="bn bn-red">
                          SORT SELL
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesModal
        rulesModal={rulesModal}
        closeModal={closeModal}
      />
      <OrderModal orderModal={orderModal} closeModal={closeModal}/>
      <PortfolioModal portfolioModal={portfolioModal} closeModal={closeModal}/>
      <ExchangeModal exchangeModal={exchangeModal} closeModal={closeModal}/>
     
    </>
  );
};

export default Home;
