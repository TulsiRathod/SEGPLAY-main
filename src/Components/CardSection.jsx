import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../Baseurl";

const CardSection = () => {
  const [cards, setCards] = useState([]);
  const [show,setShow]=useState(true);
  
  useEffect(() => {
    getCard();
  },[]);

  const getCard = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
    axios({
      method: "get",
      url: `${SERVER_URL}api/main/getCards/?day=${day}&teamid=${teamId}`,
    })
      .then((response) => {
        setCards(response.data.cards);
        // console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const add3Dots = (string, limit) => {
    var dots = "...";
    if (string.length > limit) {
      string = string.substring(0, limit) + dots;
    }
    return string;
  };

  const cardShow = ()=>{
    setShow(show?false:true);
  }

  return (
    <>
      <div className="card-section">
        <div className="row">
          <div className="col-lg-10 ">
            <div className="row">
              {cards.map((elem)=>
                <div className="col">
                <div className="seg_card" onClick={cardShow}>
                  <div className={`card_content ${show?'is-flipped':''}`}>
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
                        <i className={`fa-sharp fa-solid fa-triangle ${elem.price<0?'down':''}`}></i>
                        <span>Rs. {elem.price}/-</span>
                        <p>{add3Dots(elem.news,50)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="row">
              <div className="col">
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
                        <p>Jainam IPO is Going to Collabrate with VNSGU</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
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
                        <p>Jainam IPO is Going to Collabrate with VNSGU</p>
                      </div>
                    </div>
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

export default CardSection;
