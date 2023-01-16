import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";
import SpecialModal from "./SpecialModal";

const CardSection = ({
  day,
  round,
  cardReveal,
  stockExchangeDetails,
  getWalletDetails,
}) => {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(false);
  const [ticker, setTicker] = useState("");
  const [showSpecial, setShowSpecial] = useState(false);
  const [el, setEl] = useState({});
  const [cardCount, setCardCount] = useState({
    GOOGL: 0,
    TESLA: 0,
    SUNPM: 0,
    ADANI: 0,
    YESBK: 0,
    SHELL: 0,
  });
  useEffect(() => {
    if (day != 0) {
      getCard();
    }
  }, [day]);

  useEffect(() => {
    cardReveal ? setShow(true) : setShow(false);
  }, [cardReveal]);

  const getCard = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/getCards`,
      data: {
        day: day,
        teamid: teamId,
      },
    })
      .then((response) => {
        setCards(response.data.cards);
        setShow(true);
        // console.log(response);
        response.data.cards.map((elem) => {
          setCardCount({ ...cardCount });
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleCurPlus = (elem) => {
    if (round === 5) {
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
          localStorage.setItem("SEG_CARD_REVEAL", false);
          localStorage.setItem("SEG_CURRENT_ROUND", 0);
          window.location.reload(false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      toast("This Card will Use in Special Round Only");
    }
  };

  const handleCurMinus = (elem) => {
    if (round === 5) {
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
          localStorage.setItem("SEG_CARD_REVEAL", false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      toast("This Card will Use in Special Round Only");
    }
  };

  const handleLoanStock = (elem) => {
    if (round > 3) {
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
          window.location.reload(false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      toast("This Card will Use in Normal Round Only");
    }
  };

  const handleDebenture = (elem) => {
    if (round > 3) {
      setEl(elem);
      setShowSpecial(true);
    } else {
      toast("This Card will Use in Normal Round Only");
    }
  };

  const handleRightIs = (elem) => {
    if (round > 3) {
      setEl(elem);
      setShowSpecial(true);
    } else {
      toast("This Card will Use in Normal Round Only");
    }
  };

  const handleShareSus = (elem) => {
    if (round === 5) {
      setEl(elem);
      setShowSpecial(true);
    } else {
      toast("This Card will Use in Special Round Only");
    }
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
                        }}
                      ></img>
                      <div className="card_sign">
                        <i
                          className={`fa-sharp fa-solid fa-triangle ${
                            elem.price < 0 ? "down" : ""
                          }`}
                        ></i>
                        <span>Rs. {elem.price}/-</span>
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
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card2">
                      <div className="card_sign">
                        <p className="special_card_head">loan stock matured</p>
                        <p className="special_card_detail">
                          Collect Rs. xx,xxx from the stockvroker
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
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card2">
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
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card2">
                      <div className="card_sign">
                        <p className="special_card_head">Right Issue</p>
                        <p className="special_card_detail">
                          1 Additional share for every two held in any one
                          company price Rs. xx/- per share
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
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card1">
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
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card1">
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
                >
                  <div
                    className={`card_content ${cardReveal ? "is-flipped" : ""}`}
                  >
                    <div className="card__face front">
                      <img src="../assets/BullBear.png" alt="" />
                    </div>
                    <div className="card__face back special_card1">
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
        ) : (
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
        )}
      </div>
      <div className="card_count">
        <div className="count-block">
          <p>Google: +300</p>
        </div>
        <div className="count-block">
          <p>Adani: -150</p>
        </div>
        <div className="count-block">
          <p>Tesla: +800</p>
        </div>
      </div>
      <SpecialModal
        specialModal={showSpecial}
        closeModal={() => setShowSpecial(false)}
        stockExchangeDetails={stockExchangeDetails}
        getWalletDetails={getWalletDetails}
        type={el.type}
        card_no={el.card_no}
        description={el.description}
      />
    </>
  );
};

export default CardSection;
