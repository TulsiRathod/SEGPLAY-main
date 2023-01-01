import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../Baseurl";

const Wallet = () => {
  const [walletDetails, setWalletDetails] = useState();
  const [balance,setBalance]=useState();
  const getWalletDetails = () => {
    const team_id = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/team-portfolio?team_id=${team_id}`,
    })
      .then((response) => {
        console.log(response);
        setWalletDetails(response.data.data);
        setBalance(response.data.available_balance);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWalletDetails();
  }, []);
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
    </>
  );
};

export default Wallet;
