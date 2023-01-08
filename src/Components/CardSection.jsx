import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../Baseurl";

const CardSection = ({ day, round,cardReveal }) => {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (day != 0) {
      getCard();
    }
  }, [day]);

  useEffect(()=>{
    cardReveal?setShow(true):setShow(false);
  },[cardReveal]);

  const cardType = (e) => {
    switch(e){
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
  }

  const getCard = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    const day = localStorage.getItem("SEG_CURRENT_DAY");
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
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="card-section">
        {cards.length>0?
        <div className="row justify-content-between row-cols-5">
          {cards.map((elem) => (
           elem.type===1?
           <div className="col seg_card ">
           <div className={`card_content ${cardReveal ? "is-flipped" : ""}`}>
             <div className="card__face front">
               <img src="../assets/BullBear.png" alt="" />
             </div>
             <div className="card__face back">
               {/* <img
                 src="../assets/profile.png"
                 alt=""
                 width="40px"
                 height="40px"
               /> */}
               <span style={{background:'#808080',color:'#ffffff',padding:'5px',borderRadius:'30px'}}>{elem.company_ticker}</span>
               <div className="card_sign">
                 <i
                   className={`fa-sharp fa-solid fa-triangle ${
                     elem.price < 0 ? "down" : ""
                   }`}
                 ></i>
                 <span>Rs. {elem.price}/-</span>
                 <p>{elem.news}</p>
               </div>
             </div>
           </div>
         </div>: <div className="col seg_card ">
           <div className={`card_content ${cardReveal ? "is-flipped" : ""}`}>
             <div className="card__face front">
               <img src="../assets/BullBear.png" alt="" />
             </div>
             <div className="card__face back">
               {/* <img
                 src="../assets/profile.png"
                 alt=""
                 width="40px"
                 height="40px"
               /> */}
               <div className="card_sign">
                 {/* <i
                   className={`fa-sharp fa-solid fa-triangle ${
                     elem.price < 0 ? "down" : ""
                   }`}
                 ></i> */}
                 {/* <span>Rs. {elem.price}/-</span> */}
                 <p>{elem.description}</p>
                 <p>{cardType(elem.type)}</p>
               </div>
             </div>
           </div>
         </div>

          ))}
        </div>:
        <div className="d-flex justify-content-center">
        <img src="../assets/no-card.png" alt=""  style={{height:'60%',width:'50%',opacity:'0.5'}}/>
        </div>
        }
      </div>
    </>
  );
};

export default CardSection;
