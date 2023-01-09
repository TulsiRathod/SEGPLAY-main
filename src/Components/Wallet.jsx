import React, { useEffect, useState } from "react";

const Wallet = ({balance,portfolioDetails}) => {
  const [holdings,setHoldings]=useState(0);
  useEffect(()=>{
    var temp=0;
    portfolioDetails.map((elem)=>{
      temp+=elem.current_stock_price*elem.total_stock;
    })
  setHoldings(temp);
  },[portfolioDetails]);
  return (
    <>
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
              Rs. <span>{balance?Math.round(balance):0}</span>
            </h4>
          </div>
          <div className="balance">
            <p>Holdings</p>
            <h4>
              Rs. <span>{holdings?Math.round(holdings):0}</span>
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
              Rs. <span>{(balance+holdings)?Math.round(balance+holdings):0}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
