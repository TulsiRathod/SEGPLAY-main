import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";

const Order = (props) => {
  const { stockDetails } = props;
  const [companyName, setCompanyName] = useState();
  const [quantity, setQuantity] = useState(500);
  const [maxQ, setMaxQ] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    console.log(companyName);
    calMaxLot();
  }, [companyName]);

  const calMaxLot = () => {
    stockDetails.map((stock) => {
      if (companyName === stock.company_name) {
        setMaxQ(parseInt(stock.quantity / 12));
        setPrice(parseInt(stock.price));
      }
    });
  };

  return (
    <>
      <div className="order">
        <h3 className="mt-1" style={{ marginBottom: "calc(15vh - 75px)" }}>
          Order
        </h3>
        <div id="order_share" action="#">
          <select
            className="form-select mb-3"
            style={{ backgroundColor: "#d2f9f7" }}
            name="company"
            id="company"
            onChange={(e) => {
              setCompanyName(e.target.value);
              setQuantity(500);
            }}
          >
            <option value="0">Select company</option>
            {stockDetails.map((company) => (
              <option value={company.name}>{company.company_name}</option>
            ))}
          </select>

          <input
            type="number"
            value={quantity}
            style={{ backgroundColor: "#d2f9f7" }}
            className="mb-3"
            onChange={(e) => setQuantity(e.target.value)}
            step={500}
            min={500}
            max={maxQ}
            placeholder="Enter value in 500's figure"
            name=""
            id=""
          />
          <input
            className="form-control"
            style={{
              marginBottom: "calc(14vh - 46px)",
              backgroundColor: "#d2f9f7",
            }}
            value={companyName ? price * quantity : ""}
            type="text"
            name="Total"
            id="Totala"
            placeholder="Total Amount"
            disabled
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
