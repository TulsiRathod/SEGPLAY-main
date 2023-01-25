import { border } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { socket, toIndianCurrency } from "../Baseurl";

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    socket.on("winner", (data) => {
      setLeaderboard(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div
          className="container my-4 border"
          style={{
            borderRadius: "15px",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            height: "92vh",
            overflowY: "scroll",
          }}
        >
          <div className="d-flex justify-content-center py-3 l-header">
            <h1 className="text-light">Leaderboard</h1>
          </div>

          <table
            className="table"
            style={{
              height: "10px",
              overflowY: "scroll",
            }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Team Name</th>
                <th scope="col">Available Cash Bal.</th>
                <th scope="col">Holding Value.</th>
                <th scope="col">Total Net Worth.</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, i) => (
                <tr className="my-2">
                  <th scope="row">{i + 1}</th>
                  <td>{user.team_name}</td>
                  <td>{toIndianCurrency(user.available_cash)}</td>
                  <td>{toIndianCurrency(user.total_holdings)}</td>
                  <td>{toIndianCurrency(user.net_worth)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
