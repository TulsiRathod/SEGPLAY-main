import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Baseurl";

const Order = ({stockDetails}) => {
  const [quantity, setQuantity] = useState(0);
  const [maxQ, setMaxQ] = useState();
  const [price, setPrice] = useState(0);
  const [companyId,setCompanyId]=useState();
  useEffect(() => {
    console.log(stockDetails);
    calMaxLot();
  }, [stockDetails]);

  const calMaxLot = () => {
    stockDetails.map((stock) => {
      if (companyId === stock.id) {
        setMaxQ(parseInt(stock.quantity / 12));
        setPrice(parseInt(stock.price));
      }
    });
  };

  const handleBuy = () => {
    const teamId = localStorage.getItem("SEG_TEAM_ID");
    // console.log(teamId);
    console.log(companyId);
    // console.log(quantity);
    // console.log(localStorage.getItem("SEG_CURRENT_DAY"));
    // console.log(localStorage.getItem("SEG_CURRENT_ROUND"));
    // axios({
    //   method: "post",
    //   url: `${SERVER_URL}api/main/buy-order`,
    //   headers: {},
    //   data: {
    //     team_id:  teamId,
    //     company_id: companyId,
    //     stock_quantity:parseInt(quantity),
    //     day_no: parseInt(localStorage.getItem("SEG_CURRENT_DAY")),
    //     round_type: parseInt(localStorage.getItem("SEG_CURRENT_ROUND")),
    //     order_time:new Date().toJSON(),
    //   },
    // })
    //   .then((response) => {
    //     console.log("Success", response);
    //     toast.success(response.data.message);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error(error.response.data.message);
    //   });
  };

  return (
    <>
      <div className="order">
        <h3 className="mt-1" style={{ marginBottom: "calc(15vh - 75px)" }}>
          Order
        </h3>
        <div id="order_share" action="#">
          {/* <label htmlFor="company" style={{margin:'3px 0',color:'#FFF'}}>Company</label> */}
          <select
            className="form-select mb-2"
            style={{ backgroundColor: "#d2f9f7" }}
            id="company"
            onChange={(e) => {
              setCompanyId(e.target.name);
              setPrice(e.target.value);
              console.log(e.target.value);
              console.log(e.target.name);
            }}
            
          >
            <option defaultChecked={true} value={0}>Select company</option>
            {stockDetails.map((company) => (
              <option value={company.price} name={company.id}>{company.company_name}</option>
            ))}
          </select>
          <div className="row" style={{padding:'5px 15px'}}>
          <label htmlFor="Totala" className="col col-4" style={{margin:'5px 0',color:'#FFF',paddingLeft:'0'}}>Price</label>
          <input
            className="mb-2"
            style={{
              backgroundColor: "#d2f9f7",
            }}
            value={price}
            type="text"
            name="Total"
            id="Totala"
            placeholder="Total Amount"
            disabled
            className="col col-8"
          />
          </div>
          <div className="row" style={{margin:'5px'}}>
          <label htmlFor="price" style={{margin:'5px 0',color:'#FFF',paddingLeft:'0'}} className="col col-4">Quantity</label>
          <input
            type="number"
            value={quantity}
            style={{ backgroundColor: "#d2f9f7" }}
            className="mb-2"
            onChange={(e) => setQuantity(e.target.value)}
            step={500}
            min={500}
            max={maxQ}
            placeholder=""
            name=""
            id="price"
            className="col col-8"
          />
          </div>
          <div className="row" style={{padding:'5px 15px 10px'}}>
          <label htmlFor="Totala" className="col col-4" style={{margin:'5px 0',color:'#FFF',paddingLeft:'0'}}>Total</label>
          <input
            className="mb-2"
            style={{
              backgroundColor: "#d2f9f7",
            }}
            value={price * quantity === NaN ?0: price * quantity}
            type="text"
            name="Total"
            id="Totala"
            placeholder="Total Amount"
            disabled
            className="col col-8"
          />
          </div>
          <div className="row">
            <div className="col-lg-7 mb-1">
              <button type="button" className="bn bn-red">
                SELL
              </button>
            </div>
            <div className="col-lg-5 ps-0 mb-1">
              <button type="button" className="bn bn-green" onClick={handleBuy}>
                BUY
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-1">
              <button type="button" className="bn bn-clear">
                PASS
              </button>
            </div>
            <div className="col-lg-7 ps-0 mt-1">
              <button type="button" className="bn bn-red">
                SORT SELL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
