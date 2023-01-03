import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";

const Order = (props) => {
  const { stockDetails } = props;
  const [companyName, setCompanyName] = useState();
  const [quantity, setQuantity] = useState(500);
  const [lot, setLot] = useState([500]);

  // useEffect(() => {
  //   countQuantity();
  // }, [companyName]);

  // const countQuantity = () => {
  //   var maxQ = quantity / 12;
  //   var vals = [];
  //   var i = 500;
  //   while (maxQ) {
  //     vals.append(i);
  //     i += 500;
  //   }
  //   console.log(vals, "lot");
  // };

  const handleStock = (v) => {
    console.log(v, "hello");
    // setCompanyName(e.company_name);
    // setQuantity(e.quantity);
  };
  console.log(stockDetails);
  return (
    <>
      <div className="order">
        <h3 className="mt-1" style={{ marginBottom: "calc(15vh - 75px)" }}>
          Order
        </h3>
        <div id="order_share" action="#">
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="company"
            id="company"
            onChange={(e) => handleStock(e.target.value)}
          >
            <option value="0">Select company</option>
            {stockDetails.map((company) => (
              <option value={company}>{company.company_name}</option>
            ))}
          </select>
          {/* <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="qty"
            id="qty"
          >
            <option value="0">Select share quantity</option>

            <option value="500">500</option>
          </select> */}
          <input
            type="number"
            value={quantity}
            className="mb-3"
            onChange={(e) => setQuantity(e.target.value)}
            step={500}
            min={500}
            max={2000}
            name=""
            id=""
          />
          <input
            className="form-control"
            style={{ marginBottom: "calc(15vh - 46px)" }}
            type="text"
            name="Total"
            id="TotalA"
            placeholder="Total Amount"
          />
          <div className="row">
            <div className="col-lg-7 mb-1">
              <button type="button" className="bn bn-red">
                SELL
              </button>
            </div>
            <div className="col-lg-5 ps-0 mb-1">
              <button type="button" className="bn bn-green">
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
