import React from "react";

const SpecialCardHistory = ({ specialCardsHistoryModal, specialCardsHistory, closeModal }) => {

  const cardType = (e) => {
    switch (e) {
      case 2:
        return "Loan Stock Matured";
      case 3:
        return "Debenture";
      case 4:
        return "Right Issue";
      case 5:
        return "Currency +10%";
      case 6:
        return "Currency -10%";
      case 7:
        return "Share Suspended";
      default:
        return "Not Listed";
    }
  };
  return (
    <div
      id="exchange_modal"
      className="modal"
      style={
        specialCardsHistoryModal 
        ?
         { display: "flex" } 
        : 
        { display: "none" }
    }
    >
      <div className="modal-content" id="exchange_modal_content">
        <span className="close" id="exchange_close" onClick={closeModal}>
          &times;
        </span>
        <p className="modal_title">Special Card Used History</p>
        <hr />
        <div className="scroll_content">
          <table className="table table-striped" id="exchange_tbl">
            <thead style={{ backgroundColor: "#20958f" }}>
              <tr>
                <th style={{ color: "#fff" }}>Day</th>
                <th style={{ color: "#fff" }}>Round</th>
                <th style={{ color: "#fff" }}>Card Type</th>
                <th style={{ color: "#fff" }}>Impact on Your Portfolio</th>
                <th style={{ color: "#fff" }}>Used By</th>
              </tr>
            </thead>
            {specialCardsHistory.length > 0 ? (
              <tbody>
                {specialCardsHistory.map((elem) => (
                  <tr>
                    <td>{elem.day}</td>
                    <td>{elem.round}</td>
                    <td>{cardType(elem.type)}</td>
                    <td>
                      {elem.type === 7
                        ? `${elem.company_ticker}'s Share Suspended to Opening Price`
                        : ""}
                      {elem.type === 6
                        ? "Available Cash Balance Deducted to 10%"
                        : ""}
                    </td>
                    <td>
                        {elem.team_id === localStorage.getItem("SEG_TEAM_ID")
                         ? 'You'
                         : 'Others'
                         }
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
            <tbody>
                <tr>
                    <td colSpan={5} align="center">
                    No Specail Card Has been used
                    </td>
                </tr>
            </tbody>
              
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpecialCardHistory;
