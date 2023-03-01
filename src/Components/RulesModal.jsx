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
          <div className="scroll_content p-4">
            <div className="d-flex justify-content-center">
              <p style={{ fontWeight: 800 }}> The Fin Sharp </p>
            </div>
            <ul className="rule-box">
              <li className="rule-point">
                <span> About The Game: </span>
                <p>
                  <b> FinSharp </b>is a virtual stock market simulation game,
                  where teams receive a 1.5 Crore virtual balance to trade in 6
                  scripts over a 10-day competition. Players will gain knowledge
                  on stock market terminologies, operations, and factors that
                  impact stock prices.
                </p>
              </li>

              <li className="rule-point">
                <span>Purpose: </span>
                <p>
                  The game aims to impart financial literacy among students
                  through the stock market. Regardless of qualifications, basic
                  financial literacy is crucial to manage money effectively.
                  Stock market offers a fun way to learn, and FinSharp was
                  designed with that in mind.
                </p>
              </li>

              <li className="rule-point">
                <span>Outcome:</span>
                <p>
                  Students will have a fun and interactive learning experience
                  of the stock market and investment. They will develop an
                  understanding of stock market operations, as well as skills in
                  finance management, strategy-making, decision-making,
                  communication, teamwork, and more.
                </p>
              </li>

              <li className="rule-point">
                <span>Screens: </span>
                <p>
                  FinSharp is divided into several screens to provide an
                  interactive and organized experience. The screens are:
                </p>

                <div className="segment-block">
                  <span>Login - </span>Login to the game.
                </div>
                <div className="segment-block">
                  <span>Rules - </span>Detailed information on the rules of the
                  game.
                </div>
                <div className="segment-block">
                  <span>Dashboard - </span> The main navigation bar, news,
                  portfolio overview, heat map, cards, wallet, and order
                  placement.
                </div>
                <div className="segment-block">
                  <span>Order History - </span> Keep track of day, order number,
                  script, quantity, price, total amount, and order type.
                </div>
                <div className="segment-block">
                  <span>Portfolio - </span> View stock name, holding quantity,
                  average buy price, invested amount, last trading price,
                  current amount, change amount, and change percentage.
                </div>
                <div className="segment-block">
                  <span>Wallet - </span> Track available cash, holding value,
                  and total net worth.
                </div>
                <div className="segment-block">
                  <span>Navigation Bar - </span> Access all menus of the game.
                </div>
                <div className="segment-block">
                  <span>Cards - </span> Price movement cards and special cards,
                  with a total of 8 price movement cards and 2 special cards.
                </div>
                <div className="segment-block">
                  <span>Order Placement - </span> Place orders for stock name,
                  quantity, total amount, and choose from buy, sell, short sell,
                  or pass buttons.
                </div>

                <div className="segment-block">
                  <span>Veto Order - </span> View stock name, price, quantity,
                  and total amount.
                </div>
                <div className="segment-block">
                  <span>News - </span> Get daily news updates related to stocks
                  (12 news per day).
                </div>
                <div className="segment-block">
                  <span>Price History - </span> Track all stocks and their
                  prices.
                </div>
              </li>

              <h5 className="" style={{ marginTop: "90px" }}>
                <b>
                  <u> Team Brief </u>
                </b>
              </h5>

              <li className="rule-point">
                <span>Team Composition: </span>
                <p>
                  Each team will have 11 players, including 1 Faculty Mentor, 1
                  Team Captain, and 9 Team Players. Only 5 players (1 Faculty
                  Mentor, 1 Team Captain, and 3 Team Players) can play the game,
                  while the rest can support and substitute after the end of
                  each day. The positions of Faculty Mentor and Team Captain
                  cannot be switched.
                </p>
              </li>

              <li className="rule-point">
                <span>Starting Balance: </span>
                <p>
                  Each team will start with a virtual balance of 1.5 Crores.
                </p>
              </li>

              <li className="rule-point">
                <span>Day Schedule: </span>
                <p>
                  The game consists of 10 days with multiple order rounds. The
                  schedule of each day is as follows:
                </p>
                <ul style={{ fontWeight: 600 }}>
                  <i>
                    <p>Day Start</p>
                    <ul>
                      <p>Market open</p>
                      <ul>
                        <p>Order Round #1</p>
                        <p>Fun Fact</p>
                        <p>Order Round #2</p>
                        <p>Fun Fact</p>
                        <p>Order Round #3</p>
                        <p>Fun Fact</p>
                      </ul>
                      <p>Market Close</p>
                      <p>Veto Order</p>
                      <p>Price Discovery Period</p>
                      <p>Special Card Round</p>
                      <p>Short Sell Settlement</p>
                    </ul>
                  </i>
                  <p>Day End.</p>
                </ul>
              </li>

              <li className="rule-point">
                <span>Order Round Timings: </span>
                <div className="segment-block">
                  <span>Order Rounds: </span>1 Minute.
                </div>
                <div className="segment-block">
                  <span>Veto Order Round: </span>1 Minute.
                </div>
                <div className="segment-block">
                  <span>Special Card Round: </span>1 Minute.
                </div>
              </li>

              <li className="rule-point">
                <span>Cards: </span>
                <p>
                  The game has a total of 368 Price Movement Cards and 64
                  Special Cards.
                </p>
              </li>

              <li className="rule-point">
                <span>Special Cards: </span>
                <div className="segment-block">
                  <span>Loan Mature Stock - </span>Obtain a non-refundable
                  amount of 25 lacs from the stock exchange when your loan of
                  stock matures.
                </div>
                <div className="segment-block">
                  <span>Debenture - </span>Sell all holdings of a particular
                  stock at its opening price, benefiting you if current price is
                  below opening price.
                </div>
                <div className="segment-block">
                  <span>Share Suspend - </span>Set the stock price to previous
                  day's price from current price.
                </div>
                <div className="segment-block">
                  <span>Right Issue - </span>Right Issue of stocks, giving 1
                  stock at price of 250 for every 2 stocks held by the team.
                </div>
                <div className="segment-block">
                  <span>Currency +10% - </span>Receive a 10% increase in cash
                  balance in wallet.
                </div>
                <div className="segment-block">
                  <span>Currency -10% - </span>Deduct 10% of others' cash
                  balance from team mates except yours.
                </div>
              </li>

              <li className="rule-point">
                <span>Order Types: </span>

                <div className="segment-block">
                  <span>1. Buy – </span> Buy stocks in multiples of 1000 with a
                  maximum quantity calculated by Number of Stock available to
                  buy / Number of team playing.
                  <p>For Example,</p>
                  <p>
                    Let’s say Stock A has 2,00,000 quantities available to buy.
                    So, a team can place an order for maximum quantity is:
                  </p>
                  <p>2,00,000 / 24 = 8,333 ~= 8,000.</p>
                </div>

                <div className="segment-block">
                  <span>2. Sell – </span>Sell stocks in your portfolio with no
                  limit, but in multiples of 1000 only.
                </div>

                <div className="segment-block">
                  <span>3. Short Sell – </span>A guessing game where you predict
                  a stock's price will go down. If it does, you make a profit.
                  Automatically settled at end of day with profit or loss
                  credited to your account. Loss limited to 0.
                  <p>Short Sell Calculation:</p>
                  <p>For example,</p>
                  <p>
                    Team has decided to short sell Stock B at price of 1000 with
                    100 Quantity.{" "}
                  </p>
                  <p>
                    {" "}
                    1000 (Stock Price) x 100 (Quantity) = 1,00,000 (Total
                    Amount)
                  </p>
                  <p>
                    Now, if price goes down by 200 so the new price is 800. So,
                    you have made a profit in this order of Amount – 100 x 200 =
                    20,000. So, you have received total amount of 1,00,000 +
                    20,000 = 1,20,000.
                  </p>
                  <p>
                    Another scenario, if price goes up by 200 so the new price
                    is 1200. So, you have made a loss in this order of Amount –
                    100 x 200 = 20,000. So, you have received total amount of
                    1,00,000 – 20,000 = 80,000. <br /> The loss will be limited
                    upto the 0.
                  </p>
                </div>

                <div className="segment-block">
                  <span>4. Pass – </span>Choose not to place any Buy, Sell, or
                  Short sell orders.
                </div>
              </li>

              <li className="rule-point">
                <span>Special Cards: </span>
                <div className="segment-block">
                  <span>During Order Round -</span> Loan Matured Stock,
                  Debenture and Right Issue can be played.
                </div>

                <div className="segment-block">
                  <span>During Special Card Round -</span> Currency and Share
                  Suspend can be played.
                </div>
              </li>

              <li className="rule-point">
                <span>News: </span>
                <p>
                  Each round of orders will include 4 news items related to
                  stocks for a total of 12 news per day that provides insight
                  into stock price movements.
                </p>
              </li>
              <li className="rule-point">
                <span>Winner Declaration: </span>
                <p>
                  The winner will be determined based on the highest net worth
                  in the game. The net worth is calculated as the sum of
                  Available Cash and Total Holding Values.
                </p>
              </li>
              <li className="rule-point">
                <span>Veto Order Bid: </span>
                <p>
                  A Veto Order Bid works as follows: if multiple teams place a
                  bid on different stocks, the game will check for the highest
                  average buy price of each stock team-wise. If more than one
                  team bids on the same stock, the team with the highest average
                  buy price will win the bid. If the average bid price and total
                  amount is the same for multiple teams, the team with the
                  highest quantity will win the bid.
                </p>
              </li>

              <img
                src="../assets/Rulebook-tb.png"
                className="my-4 border border-3"
                alt=""
              />
              <p>
                In this example, the table shows the bids placed by each team.
                The game will determine the highest average buy price for each
                stock team-wise and if more than one team bids on the same
                stock, the team with the highest average buy price will win the
                bid. If average bid price and total amount is the same for
                multiple teams, the team with the highest quantity will win the
                bid.
              </p>

              <li className="rule-point">
                <span>Price Movement Cards: </span>
                <p>
                  368 cards total (46 cards x 8 sets) <br />
                  <br /> Bifurcation is as followed for Price Movement Cards:{" "}
                  <br />
                  <br /> There will be 6 stocks companies in which you can do
                  trading. <br />
                  <br /> 6 companies for trading: Google, Tesla, Shell, Adani,
                  YES Bank, Sun Pharma Stock Opening Price table provided <br />
                  <br /> Below-mentioned is the table of Stock Opening Price
                </p>
                <img
                  src="../assets/Rulebook-tb2.png"
                  className="my-4 border border-3"
                  alt=""
                />
                <p>
                  Total numbers of price movement cards in game will be 46 cards
                  and there will be 8 set of price movement cards. <br />
                  <br /> So, total becomes 46 x 8 = 368 cards. Total number of
                  special cards in the game will be 16 cards and there will be 4
                  set of special cards. So, total becomes 16 x 4 = 64 cards.{" "}
                  <br />
                  <br />
                  Loan mature stocks, debenture, right issue, share suspend,
                  currency + and currency -.
                </p>
              </li>

              <li className="rule-point">
                <span>Distribution: </span>
                <p>
                  Teams receive 10 cards (8 price movement and 2 special) at
                  start of day Cards played throughout the day. <br />
                  <br /> At the end of the day, we will collect all the cards
                  and calculate the price of each stock and that will be the
                  closing price of that particular stock for the day. <br />
                  <br /> Now let’s understand by an example between 2 teams,
                </p>
                <img
                  src="../assets/Rulebook-tb3.png"
                  className="my-4 border border-3"
                  alt=""
                />
                <p>
                  Total numbers of price movement cards in game will be 46 cards
                  and there will be 8 set of price movement cards. <br />
                  <br /> So, total becomes 46 x 8 = 368 cards. Total number of
                  special cards in the game will be 16 cards and there will be 4
                  set of special cards. So, total becomes 16 x 4 = 64 cards.{" "}
                  <br />
                  <br />
                  Loan mature stocks, debenture, right issue, share suspend,
                  currency + and currency -.
                </p>
              </li>

              <li className="rule-point">
                <span>Calculating Stock Price: </span>
                <pre>Google = 156 - 31 - 94 = + 31</pre>
                <pre>Yes Bank = -63 - 63 - 63 = - 189</pre>
                <pre>Adani = 63 + 94 - 31 = + 123</pre>
                <pre>Shell = -31 - 94 + 63 +94 = + 32</pre>
                <pre>Sun Pharma = 31 = + 31</pre>
                <pre>Tesla = 156 - 125 = + 31</pre>
              </li>

              <p>
                Assign base price to each stock Play multiple price movement
                cards throughout the day Add/subtract total fluctuation sum from
                base price Repeat process daily with final day closing price as
                next day's base price Stock price changes daily
              </p>

              <li className="rule-point">
                <span>Notes: </span>
                <p>
                  Maximum quantity of all stocks is 200,000 <br /> Day closing
                  price becomes day opening price of next day.
                </p>
              </li>
            </ul>
          </div>
          {!accept ? (
            <>
              <div
                className="d-flex justify-content-between pt-4 mt-auto"
                style={{ backgroundColor: "#ffffff" }}
              >
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
