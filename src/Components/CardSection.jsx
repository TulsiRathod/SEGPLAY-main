import axios from "axios";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { ROUND_DELAY, SERVER_URL } from "../Baseurl";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as Bs from "react-icons/bs";

const CardSection = ({
  day,
  round,
  cardReveal,
  stockExchangeDetails,
  getWalletDetails,
  portfolioDetails,
  getNews,
  setdisableOrders,
  disableOrders,
  setOrderPlaced,
  setSpecialUse,
  specialUse,
  getStockExchange,
}) => {
  const [cards, setCards] = useState([]);
  const [specialShow, setSpecialShow] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [el, setEl] = useState({});
  const [cardCount, setCardCount] = useState({
    GOOGL: 0,
    TESLA: 0,
    ADANI: 0,
    SUNPM: 0,
    SHELL: 0,
    YESBK: 0,
  });
  const [isLoanUsed, setIsLoanUsed] = useState(false);
  const [isRightUsed, setIsRightUsed] = useState(false);
  const [isDebUsed, setIsDebUsed] = useState(false);
  const [isShareSus, setIsShareSus] = useState(false);
  const [specialCard, setSpecialCard] = useState(false);
  const [spDisable, setSpDisable] = useState(false);
  const [spResponse, setSpResponse] = useState(false);
  const [weHaveCard, setWeHaveCard] = useState(false);

  useEffect(() => {
    if (day != 0) {
      getCard();
      setSpecialUse(false);
      setIsShareSus(false);
      setSpecialCard(false);
      setIsDebUsed(false);
      setIsLoanUsed(false);
      setIsRightUsed(false);
    }
  }, [day]);

  const getCard = async () => {
    setWeHaveCard(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    await axios({
      method: "post",
      url: `${SERVER_URL}api/main/getCards`,
      data: {
        day: day,
        teamid: teamId,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setCards(response.data.cards);
          getNews();
          setSpecialCard(false);
          // setShow(true);
          let counts = {
            GOOGL: 0,
            TESLA: 0,
            ADANI: 0,
            SUNPM: 0,
            SHELL: 0,
            YESBK: 0,
          };
          response.data.cards.map((elem) => {
            counts[elem.company_ticker] += elem.price;
          });
          setCardCount(counts);
        } else {
          setWeHaveCard(false);
        }
      })
      .catch((error) => {
        setWeHaveCard(false);
        console.log("error", error);
      });
  };

  const handleCurPlus = (elem) => {
    if (round === 5) {
      if (!specialCard) {
        setOrderPlaced(true);
        setSpecialCard(true);
        setdisableOrders(true);

        const teamId = localStorage.getItem("SEG_TEAM_ID");
        axios({
          method: "post",
          url: `${SERVER_URL}api/main/cash-flow-inc`,
          data: {
            team_id: teamId,
            card_no: elem.card_no,
            card_used_time: new Date().toJSON(),
            day: day,
            round: round,
            description: elem.description,
            type: elem.type,
          },
        })
          .then((response) => {
            if (response.data.success) {
              toast.success(response.data.message);
              setdisableOrders(true);
              getWalletDetails();
            }
          })
          .catch((error) => {
            console.log("error", error);
            setdisableOrders(false);
            setOrderPlaced(false);
            setSpecialCard(false);
          });
      }
    } else {
      toast("Can Use In Special Round Only");
    }
  };

  const handleCurMinus = (elem) => {
    if (round === 5) {
      if (!specialCard) {
        setOrderPlaced(true);
        setdisableOrders(true);
        setSpecialCard(true);
        const teamId = localStorage.getItem("SEG_TEAM_ID");
        axios({
          method: "post",
          url: `${SERVER_URL}api/main/cash-flow-dec`,
          data: {
            team_id: teamId,
            card_no: elem.card_no,
            card_used_time: new Date().toJSON(),
            day: day,
            round: round,
            description: elem.description,
            type: elem.type,
          },
        })
          .then((response) => {
            // toast("Cuurency Decreament Card Used Successfully!!");
            if (response.data.success) {
              toast.success(response.data.message);
              setdisableOrders(true);
              getWalletDetails();
            }
          })
          .catch((error) => {
            console.log("error", error);
            setOrderPlaced(false);
            setdisableOrders(false);
            setSpecialCard(false);
          });
      }
    } else {
      toast("This Card will Use in Special Round Only");
    }
  };

  const handleLoanStock = (elem) => {
    if (disableOrders) {
      toast("Can't Use Now");
      return;
    }
    if (round < 4 && round > 0) {
      if (!isLoanUsed) {
        setIsLoanUsed(true);
        setdisableOrders(true);

        setOrderPlaced(true);
        const teamId = localStorage.getItem("SEG_TEAM_ID");
        axios({
          method: "post",
          url: `${SERVER_URL}api/main/loan-stock`,
          data: {
            team_id: teamId,
            card_no: elem.card_no,
            card_used_time: new Date().toJSON(),
            day: day,
            round: round,
            description: elem.description,
            type: elem.type,
          },
        })
          .then((response) => {
            if (response.data.success) {
              toast.success(response.data.message);
              getWalletDetails();
            }
          })
          .catch((error) => {
            console.log("error", error);
            setdisableOrders(false);
            setIsLoanUsed(false);
            setOrderPlaced(false);
          });
      }
    } else {
      toast("This Card will Use in Normal Round Only");
    }
  };

  const handleDebenture = (elem) => {
    if (isDebUsed) {
      return;
    }
    if (disableOrders) {
      toast("Can't Use Now");
      return;
    }
    if (round < 4 && round > 0) {
      setEl(elem);
      setSpDisable(false);
      setSpecialShow(true);
      setSpResponse(false);
    } else {
      toast("This Card will Use in Normal Round Only");
    }
  };

  const SubmitDebenture = () => {
    setIsDebUsed(true);
    setOrderPlaced(true);
    setdisableOrders(true);
    setSpDisable(true);
    setSpResponse(true);

    if (!isDebUsed) {
      const teamId = localStorage.getItem("SEG_TEAM_ID");
      const day = localStorage.getItem("SEG_CURRENT_DAY");
      const round = localStorage.getItem("SEG_CURRENT_ROUND");
      axios({
        method: "post",
        url: `${SERVER_URL}api/main/debenture`,
        data: {
          team_id: teamId,
          card_no: el.card_no,
          card_used_time: new Date().toJSON(),
          day: parseInt(day),
          round: parseInt(round),
          description: el.description,
          type: el.type,
          company_ticker: companyName,
        },
      })
        .then((response) => {
          console.log(response.data.success, "response aaya");
          if (response.data.success) {
            toast.success(response.data.message);
            getWalletDetails();
            setdisableOrders(true);
            setSpecialShow(false);
            setSpResponse(false);
            setCompanyName("");
          }
        })
        .catch((error) => {
          console.log(error, "error aai bhai");
          setdisableOrders(false);
          setSpResponse(false);
          setSpDisable(false);
          setOrderPlaced(false);
          setIsDebUsed(false);
        });
    }
  };

  const handleRightIs = (elem) => {
    if (!isRightUsed) {
      if (disableOrders) {
        toast("Can't Use Now");
        return;
      }
      if (round < 4 && round > 0) {
        setEl(elem);
        setSpDisable(false);
        setSpResponse(false);
        setSpecialShow(true);
      } else {
        toast("This Card will Use in Normal Round Only");
      }
      // console.log(usedCardNo, "used Cards");
    }
  };

  const SubmitRightIs = () => {
    setIsRightUsed(true);
    setSpDisable(true);
    setSpResponse(true);

    setOrderPlaced(true);
    setdisableOrders(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    const round = localStorage.getItem("SEG_CURRENT_ROUND");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/right-issue`,
      data: {
        team_id: teamId,
        card_no: el.card_no,
        card_used_time: new Date().toJSON(),
        day: parseInt(day),
        round: parseInt(round),
        description: el.description,
        type: el.type,
        company_ticker: companyName,
      },
    })
      .then((response) => {
        if (response.data.success) {
          toast(response.data.message);
          setSpecialShow(false);
          setSpResponse(false);
          setCompanyName("");
          getWalletDetails();
        }
      })
      .catch((error) => {
        toast(error.response.data.message);
        setdisableOrders(false);
        setSpResponse(false);
        setSpDisable(false);
        setOrderPlaced(false);
        setIsRightUsed(false);
      });
  };

  const handleShareSus = (elem) => {
    if (!isShareSus) {
      if (round === 5 && specialUse) {
        setEl(elem);
        setSpDisable(false);
        setSpResponse(false);

        setSpecialShow(true);
      } else {
        toast("This Card will Use in Special Round Only");
      }
    } else {
      toast.error("Can't Use Now");
    }
  };

  const SubmitShareSus = () => {
    setIsShareSus(true);
    setOrderPlaced(true);
    setdisableOrders(true);
    setSpDisable(true);
    setSpResponse(true);
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    const round = localStorage.getItem("SEG_CURRENT_ROUND");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/share-suspended`,
      data: {
        team_id: teamId,
        card_no: el.card_no,
        card_used_time: new Date().toJSON(),
        day: parseInt(day),
        round: parseInt(round),
        description: el.description,
        type: el.type,
        company_ticker: companyName,
      },
    })
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          setSpecialUse(true);
          setSpResponse(false);
          getWalletDetails();
          getStockExchange();
          setSpecialShow(false);
          setSpecialCard(true);
        }
      })
      .catch((error) => {
        toast(error.response.data.message);
        setSpResponse(false);
        setSpDisable(false);
        setIsShareSus(false);
        setOrderPlaced(false);
        setdisableOrders(false);
      });
  };

  const handleSubmit = () => {
    if (companyName === "") {
      toast.error("Please Select Company");
      return;
    }
    if (el.type === 3) SubmitDebenture();
    else if (el.type === 4) SubmitRightIs();
    else if (el.type === 7) SubmitShareSus();
  };

  return (
    <>
      <div className="card-section">
        {cards.length > 0 ? (
          <div className="row justify-content-between row-cols-5">
            {cards.map((elem) =>
              elem.type === 1 ? (
                <div className="col seg_card ">
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back">
                      <img
                        src={`../assets/${elem.company_ticker}.png`}
                        style={{
                          width: "40px",
                          height: "40px",
                          margin: "auto",
                          borderRadius: "50%",
                          objectFit: "cover",
                          position: "absolute",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      ></img>
                      <div className="card_sign">
                        {/* <i
                          className={`fa-sharp fa-solid fa-triangle ${
                            elem.price < 0 ? "down" : ""
                          }`}
                        ></i> */}

                        {elem.price < 0 ? (
                          <Bs.BsFillTriangleFill
                            color="#d14047"
                            size={35}
                            style={{ transform: "rotate(180deg)" }}
                          />
                        ) : (
                          <Bs.BsFillTriangleFill color="#63ca71" size={35} />
                        )}
                        <span>
                          Rs. {elem.price > 0 ? "+" : ""}
                          {elem.price}/-
                        </span>
                        <span>{elem.company_ticker}</span>
                        <p>{elem.news.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 2 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleLoanStock(elem);
                  }}
                >
                  <div
                    className={`card_content ${
                      cardReveal ? "is-flipped" : ""
                    } `}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card1 ${
                        isLoanUsed ? "disable" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {isLoanUsed ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <div className="card_sign">
                        <p className="special_card_head">loan stock matured</p>
                        <p className="special_card_detail">
                          Collect Rs. 25,00,000 from the stockbroker
                        </p>
                        <img
                          src="../assets/loan.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 3 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleDebenture(elem);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card1 ${
                        isDebUsed ? "disable" : ""
                      }`}
                    >
                      {isDebUsed ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <div className="card_sign">
                        <p className="special_card_head">Debenture</p>
                        <p className="special_card_detail">
                          Sell your share to a bankrupt company at the opening
                          price
                        </p>
                        <img
                          src="../assets/Debenture.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 4 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleRightIs(elem);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card1 ${
                        isRightUsed ? "disable" : ""
                      }`}
                    >
                      {isRightUsed ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <div className="card_sign">
                        <p className="special_card_head">Right Issue</p>
                        <p className="special_card_detail">
                          1 Additional share for every two held in any one
                          company price Rs. 250/- per share
                        </p>
                        <img
                          src="../assets/right_issue.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 5 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleCurPlus(elem);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card2 ${
                        specialCard ? "disable" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {specialCard ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <img
                        src="../assets/increase.png"
                        className="increase"
                        width="100%"
                        height="100"
                        alt=""
                        srcset=""
                      />
                      <div className="card_sign">
                        <span className="currency_card">Currency</span>
                        <i className="fa-sharp fa-solid fa-triangle"></i>
                        <span className="currency_per">+10%</span>
                        <img
                          src="../assets/Currency.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 6 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleCurMinus(elem);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card2 ${
                        specialCard ? "disable" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {specialCard ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <div className="card_sign">
                        <span className="currency_card">Currency</span>
                        <i className="fa-sharp fa-solid fa-triangle down"></i>
                        <span className="currency_per">-10%</span>
                        <img
                          src="../assets/Currency.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {cards.map((elem) =>
              elem.type === 7 ? (
                <div
                  className="seg_card"
                  onClick={() => {
                    handleShareSus(elem);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div
                      className={`card__face back special_card2 ${
                        isShareSus ? "disable" : ""
                      }`}
                    >
                      {specialCard ? (
                        <img
                          src="../assets/lock.png"
                          className="lock-icon"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <div className="card_sign">
                        <p className="special_card_head ">Share Suspended</p>
                        <p
                          className="special_card_detail"
                          style={{ color: "rgb(54, 54, 54)" }}
                        >
                          Suspend the price of any one company at it's previous
                          level
                        </p>
                        <img
                          src="../assets/share_suspended.png"
                          className="special_cards"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        ) : !weHaveCard ? (
          <div className="d-flex justify-content-center my-auto">
            <img
              src="../assets/no-card.png"
              alt=""
              style={{
                height: "200px",
                width: "250px",
                opacity: "0.3",
                margin: "10%",
              }}
            />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between ">
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="d-flex justify-content-between py-2">
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
              <Skeleton
                style={{
                  width: "140px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </>
        )}
        <div className="card_count">
        {cardReveal ? (
          <>
            <div className="count-block">
              <p>
                {" "}
                <img src="../assets/GOOGL.png" alt="" srcset="" />
                {cardCount.GOOGL > 0 ? "+" : ""} {cardCount.GOOGL}
              </p>
            </div>
            <div className="count-block">
              <p>
                <img src="../assets/ADANI.png" />
                {cardCount.ADANI > 0 ? "+" : ""} {cardCount.ADANI}
              </p>
            </div>
            <div className="count-block">
              <p>
                <img src="../assets/SHELL.png" />
                {cardCount.SHELL > 0 ? "+" : ""} {cardCount.SHELL}
              </p>
            </div>

            <div className="count-block">
              <p>
                <img src="../assets/YESBK.png" />
                {cardCount.YESBK > 0 ? "+" : ""} {cardCount.YESBK}
              </p>
            </div>

            <div className="count-block">
              <p>
                <img src="../assets/TESLA.png" />
                {cardCount.TESLA > 0 ? "+" : ""} {cardCount.TESLA}
              </p>
            </div>

            <div className="count-block">
              <p>
                <img src="../assets/SUNPM.png" />
                {cardCount.SUNPM > 0 ? "+" : ""} {cardCount.SUNPM}
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      </div>
    

      <Offcanvas show={specialShow} onHide={() => setSpecialShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b>Special Order</b>{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div action="#">
            {el.type !== 7 ? (
              <select
                className="form-select"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              >
                <option value="0" selected>
                  Select company
                </option>
                {portfolioDetails.map((company) => (
                  <option value={company.company_ticker}>
                    {company.company_name}
                  </option>
                ))}
              </select>
            ) : (
              <select
                className="form-select"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              >
                <option value="0" selected>
                  Select company
                </option>
                {stockExchangeDetails.map((company) => (
                  <option value={company.company_ticker}>
                    {company.company_name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button
            className="btn btn-success"
            style={{
              position: "absolute",
              width: "94%",
              left: "10px",
              bottom: "10px",
            }}
            onClick={handleSubmit}
            disabled={spDisable}
          >
            {spResponse ? "Loading..." : "Submit"}
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CardSection;
