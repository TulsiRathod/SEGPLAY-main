import React from "react";

const SpecialCardUsed = ({ ImpactCards, scModal, closeModal }) => {
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
  return (
    <div
      id="exchange_modal"
      className="modal"
      style={scModal ? { display: "flex" } : { display: "none" }}
    >
      <div className="modal-content" id="exchange_modal_content">
        <span className="close" id="exchange_close" onClick={closeModal}>
          &times;
        </span>
        <p className="modal_title">Special Card Used</p>
        <hr />
        <div className="scroll_content">
          <table className="table table-striped" id="exchange_tbl">
            <thead style={{ backgroundColor: "#20958f" }}>
              <tr>
                <th style={{ color: "#fff" }}>Card Type</th>
                <th style={{ color: "#fff" }}>Impact on Your Portfolio</th>
              </tr>
            </thead>
            {ImpactCards.length > 0 ? (
              <tbody>
                {ImpactCards.map((elem) => (
                  <tr>
                    <td>{cardType(elem.type)}</td>
                    <td>
                      {elem.type === 7
                        ? `${elem.company_ticker}'s Share Suspended to Opening Price`
                        : ""}
                      {elem.type === 6
                        ? "Available Cash Balance Deducted to 10%"
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              "No Specail Card Has been used"
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpecialCardUsed;
