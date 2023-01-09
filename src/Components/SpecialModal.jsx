import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";

const SpecialModal = ({
  specialModal,
  closeModal,
  stockExchangeDetails,
  getWalletDetails,
  type,
  card_no,
  description,
}) => {

  const [companyTick, setCompanyTick] = useState();

  const setMinBidAmount = (e) => {
    setCompanyTick(e.company_ticker);
  };

  const cardType = (e) => {
    switch (e) {
      case 2:
        return "Loan Stock Matured";
        break;
      case 3:
        return "Debenture";
        break;
      case 4:
        return "Right Issue";
        break;
      case 5:
        return "Currency +10%";
        break;
      case 6:
        return "Currency -10%";
        break;
      case 7:
        return "Share Suspended";
        break;
      default:
        return "Not Listed";
    }
  };

  const handleDebenture = () =>{
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    const round = localStorage.getItem("SEG_CURRENT_ROUND");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/debenture`,
      data: {
          team_id : teamId,
          card_no : card_no,
          card_used_time : new Date().toJSON(),
          day : day,
          round : round,
          description : description,
          type : type,
          company_ticker:companyTick,
          order_time:""
      },
    })
      .then((response) => {
        closeModal();
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  
  const handleRightIs = () =>{
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    const round = localStorage.getItem("SEG_CURRENT_ROUND");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/right-issue`,
      data: {
          team_id : teamId,
          card_no : card_no,
          card_used_time : new Date().toJSON(),
          day : day,
          round : round,
          description : description,
          type : type,
          company_ticker:companyTick,
      },
    })
      .then((response) => {
        closeModal();
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const handleShareSus = () =>{
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    const round = localStorage.getItem("SEG_CURRENT_ROUND");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/share-suspended`,
      data: {
          team_id : teamId,
          card_no : card_no,
          card_used_time : new Date().toJSON(),
          day : day,
          round : round,
          description : description,
          type : type,
          company_ticker:companyTick,
      },
    })
      .then((response) => {
        closeModal();
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <div
        id="order_modal"
        class="modal"
        style={specialModal ? { display: "flex" } : { display: "none" }}
      >
        <div class="modal-content" id="veto_modal_content">
          {/* <!-- <p>Veto order</p> --> */}
          <span class="close" id="table_order_close" onClick={closeModal}>
            &times;
          </span>
          <p class="veto_title">{cardType(type)}</p>
          <hr />
          <div class="scroll_content">
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                  <form class="Company_form">
                    <p class="company_title">Company List</p>
                    {stockExchangeDetails.map((stock, i) => (
                      <div
                        class="inputGroup"
                        onClick={() => setMinBidAmount(stock)}
                      >
                        <input id={`radio${i}`} name="radio" type="radio" />
                        <label for={`radio${i}`}>{stock.company_name}</label>
                      </div>
                    ))}
                     {type===3?<button type="button" class="btn_veto_order" onClick={handleDebenture}>
                      Submit
                    </button>:''}
                    
                    {type===4?<button type="button" class="btn_veto_order" onClick={handleRightIs}>
                      Submit
                    </button>:''}
                    {type===7?<button type="button" class="btn_veto_order" onClick={handleShareSus}>
                      Submit
                    </button>:''}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialModal;
