import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";

const VetoModal = ({
  vetoModal,
  closeModal,
  stockExchangeDetails,
  getWalletDetails,
}) => {
  const [bidAmount, setBidAmount] = useState();
  const [userBid, setUserBid] = useState();
  const [quantity, setQuantity] = useState(500);
  const [maxQ, setMaxQ] = useState();
  const [companyId, setCompanyId] = useState();

  const setMinBidAmount = (e) => {
    setBidAmount(e.price);
    setMaxQ(e.quantity);
    setCompanyId(e.id);
  };

  const handleVeto = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/place-veto-order`,
      headers: {},
      data: {
        team_id: teamId,
        company_id: companyId,
        stock_quantity: parseInt(quantity),
        day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
        bidding_price: userBid,
        round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
        order_time: new Date().toJSON(),
      },
    })
      .then((response) => {
        console.log("veto ho gaya", response);
        toast.success(response.data.message);
        getWalletDetails();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div
        id="order_modal"
        class="modal"
        style={vetoModal ? { display: "flex" } : { display: "none" }}
      >
        <div class="modal-content" id="veto_modal_content">
          {/* <!-- <p>Veto order</p> --> */}
          <span class="close" id="table_order_close" onClick={closeModal}>
            &times;
          </span>
          <p class="veto_title">Veto order</p>
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
                  </form>
                </div>

                <div class="col-md-5">
                  <div class="veto_select">
                    <p class="input_title">Quantity</p>
                    <input
                      type="number"
                      value={quantity}
                      className=" qty_input mb-3"
                      onChange={(e) => setQuantity(e.target.value)}
                      step={500}
                      min={500}
                      max={maxQ}
                      placeholder="Enter value in 500's figure"
                      name=""
                      id=""
                    />
                    <p>
                      <span style={{ color: "#1a7772" }}> Max Qty:</span>
                      {maxQ}
                    </p>

                    <p class="input_title">Amount</p>
                    <input
                      className=""
                      onChange={(e) => setUserBid(e.target.value)}
                      min={bidAmount}
                      value={userBid}
                      type="number"
                      name="Total"
                      id="Totala"
                      placeholder="Total Amount"
                    />
                    <p>
                      <span style={{ color: "#1a7772" }}>
                        {" "}
                        Min Bid Amount:{" "}
                      </span>
                      {bidAmount}
                    </p>
                    <button
                      type="button"
                      class="btn_veto_order"
                      onClick={handleVeto}
                    >
                      Veto Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VetoModal;
