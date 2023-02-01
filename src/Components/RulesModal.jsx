import React, { useState } from "react";
import { toast } from "react-hot-toast";

const RulesModal = ({ rulesModal, closeModal }) => {
  const [checkBox, setCheckBox] = useState(false);
  const accept = localStorage.getItem("SEG_RULES_ACEEPT");

  const handleAgreement = () => {
    if (checkBox) {
      localStorage.setItem("SEG_RULES_ACEEPT", true);
      closeModal();
    } else {
      toast.error("Please Agree With Rules");
    }
  };
  return (
    <>
      <div
        id="rule_modal"
        className="modal"
        style={rulesModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal-content" id="rules_modal">
          <span className="close" id="rules_modal_close">
            &nbsp;
          </span>
          <p className="modal_title">Game Rules</p>
          {/* <hr /> */}
          <div className="scroll_content p-4 border">
            <div className="d-flex justify-content-center">
              <p style={{ fontWeight: 800 }}> The Fin Sharp </p>
            </div>
            <ul className="rule-box">
              <li className="rule-point">
                <span> About The Game: </span>
                <p>
                  <b> The FinSharp </b>is a simulated trading and stock market
                  learning game. Each team will receive a virtual 1.5 Crore
                  balance to trade in 6 scripts during the virtual 10-day
                  competition. One can learn about various stock market
                  terminologies, how the stock market operates, and what kinds
                  of events have an impact on stock prices.
                </p>
              </li>

              <li className="rule-point">
                <span> Game Purpose: </span>
                <p>
                  The purpose of the game is to import financial literacy among
                  students in terms of Stock Market. As we know, no matter what
                  our qualifications might be, we all should have a basic
                  financial literacy to manage our money in a better way. Also,
                  who wouldn’t love it when money works for them? And what
                  better place than stock market! So, keeping all these in mind
                  we have come up with this game to educate student in a fun
                  way.
                </p>
              </li>

              <li className="rule-point">
                <span> Game Outcome:</span>
                <p>
                  Students will get to learn about stock market and investment
                  in a fun & engaging way. They will learn new stock market
                  terms and how stock market works. At the same time, they will
                  also learn to make strategies, understand & manage finance.
                  Apart from that, the game will also include management skills
                  like planning, analysing, decision making skills,
                  interpersonal skills, communication skills and most
                  importantly team work.
                </p>
              </li>

              <li className="rule-point">
                <span>Screens: </span>
                <p>The game is divided into following screens:</p>

                <div className="segment-block">
                  <span>Login - </span>Here you can login into game.
                </div>
                <div className="segment-block">
                  <span>Rules - </span>All the rules of the game will be
                  mentioned here and you need to read the rules in order to play
                  the game and understand it.
                </div>
                <div className="segment-block">
                  <span>Order History - </span> Day, Order Number, Script,
                  Quantity, Price, Total Amount & Order Type.
                </div>
                <div className="segment-block">
                  <span>Portfolio - </span> Stock Name, Holding Quantity,
                  Average Buy Price, Invested Amount, Last Trading Price,
                  Current Amount, Change Amount, Change Percentage
                </div>
                <div className="segment-block">
                  <span>Wallet - </span> Available Cash, Holding Value & Total
                  Net worth.
                </div>
                <div className="segment-block">
                  <span>Cards - </span> Price Movement Cards & Special Cards.
                  Total number of cards will be 8 of Price Movements Cards and 2
                  Special Cards.
                </div>
                <div className="segment-block">
                  <span>Order Placement - </span> Stock Name, Quantity, Total
                  Amount, Buy Button, Sell Button, Short Sell Button & Pass
                  Button.
                </div>
                <div className="segment-block">
                  <span>Analytics - </span> Here you can analysis your
                  competitor’s portfolio and compare it with yours.
                </div>
                <div className="segment-block">
                  <span>Veto Order - </span> Stock Name, Price, Quantity & Total
                  Amount.
                </div>
                <div className="segment-block">
                  <span>News - </span> Here you can get the news related to
                  stocks. Each day you will get 12 news.
                </div>
                <div className="segment-block">
                  <span>Watchlist - </span> Here you can view all the stocks and
                  their prices.
                </div>
              </li>
            </ul>
          </div>
          {!accept ? (
            <>
              <div className="d-flex justify-content-between pt-4">
                <div className="d-flex px-3 my-auto">
                  <input
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                    type="checkbox"
                    checked={checkBox ? "checked" : ""}
                    onClick={() => {
                      setCheckBox(checkBox ? false : true);
                    }}
                    id="rules-chk"
                  />
                  <label htmlFor="rules-chk">
                    <b>I agree with above rules.</b>
                  </label>
                </div>
                <button
                  id="agree"
                  className="modal-btn"
                  onClick={handleAgreement}
                >
                  Agree
                </button>
              </div>
            </>
          ) : (
            <div className="row" style={{ margin: "20px auto" }}>
              <button id="agree" className="modal-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RulesModal;
