import React, { useEffect, useState } from "react";

const Wallet = ({balance,portfolioDetails}) => {
  console.log(portfolioDetails);
  const [holdings,setHoldings]=useState(0);
  useEffect(()=>{
    setHoldings(0);
    portfolioDetails.map((elem)=>{
      setHoldings(holdings+elem.holded_stock*elem.current_price);
  })
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
              Rs. <span>{balance}</span>
            </h4>
          </div>
          <div className="balance">
            <p>Holdings</p>
            <h4>
              Rs. <span>{holdings}</span>
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
              Rs. <span>{balance+holdings}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
