import React from 'react'

const OrderModal = ({orderModal,closeModal}) => {
  return (
    <>
     <div id="order_modal" class="modal"
     style={orderModal ? { display: "flex" } : { display: "none" }}>
        <div class="modal-content" id="order_modal_content">
          <span class="close" id="table_order_close" onClick={closeModal}>&times;</span>
            <p class="modal_title">Order History</p>
            <hr/>
            <div class="scroll_content">
              <table class="table table-striped">
                  <thead style={{backgroundColor: "#20958f",color: "#fff"}}>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Order</th>
                      <th scope="col">Script</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Order Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 2</td>
                      <td>1</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>Pass</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Short Sell</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Sell</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>Day 1</td>
                      <td>1</td>
                      <td>Reliance</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>500000.00</td>
                      <td>Buy</td>
                    </tr>
  
                  </tbody>
                </table>
          </div>
        </div>
      </div> 
    </>
  )
}

export default OrderModal
