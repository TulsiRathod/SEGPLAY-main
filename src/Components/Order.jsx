import React from 'react'

const Order = () => {
  return (
    <>
       <div className="order">
                  <h3
                    className="mt-1"
                    style={{ marginBottom: "calc(15vh - 75px)" }}
                  >
                    Order
                  </h3>
                  <form id="order_share" action="#">
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="company"
                      id="company"
                    >
                      <option value="0">Select company</option>
                      <option value="1">Netflix</option>
                      <option value="2">Tata</option>
                      <option value="3">Infosys</option>
                      <option value="4">Jainam</option>
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="qty"
                      id="qty"
                    >
                      <option value="0">Select share quantity</option>
                      <option value="500">500</option>
                    </select>
                    <input
                      className="form-control"
                      style={{ marginBottom: "calc(15vh - 46px)" }}
                      type="text"
                      name="TotalA"
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
                  </form>
                </div> 
    </>
  )
}

export default Order
