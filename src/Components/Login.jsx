import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RulesModal from "./RulesModal";
import { SERVER_URL } from "../Baseurl";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [teamId, setTeamId] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    axios({
      method: "post",
      url: `${SERVER_URL}api/main/login`,
      headers: {}, 
      data: {
        "username": teamId,
        "password":password,
      }
    })
      .then((response) => {
        toast.success(response.data.message);
        localStorage.setItem('SEG_TEAM_ID',response.data.data.id);
        setRulesModal(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const [error, setError] = useState("");
  const validate = () => {
    let isvalid = true;
    if (!teamId) {
      setError("Please Enter TeamI");
      isvalid = false;
    }
    return isvalid;
  };

  const closeModal = () => {
    setRulesModal(false);
  };

  const HandleAccept = () => {
    nav("/Home");
  };

  useEffect(()=>{
    if(localStorage.getItem("SEG_TEAM_ID")){
      nav('/Home');
    }
  })

  return (
    <>
      <div class="backdesign"></div>
      <div class="container inner_container">
        <div class="row">
          <div class="col-md-7">
            <img
              src="../assets/Login illustrator.png"
              alt="Login illustrator"
              class="login_illu"
            />
          </div>
          <div class="col-md-5 m-auto">
            <div class="form">
              <p class="log_title">Log In</p>
              <p class="log_desc">Login to SEG Play</p>

              <form action="">
                <div class="floating mt-5">
                  <input
                    class="floating_input"
                    name="username"
                    type="text"
                    placeholder="Team ID"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                  />
                  <label
                    for="input_teamid"
                    class="floating_label"
                    data-content="TEAM ID"
                  >
                    <span class="hidden--visually">TEAM ID</span>
                  </label>
                </div>

                <div class="floating mt-4">
                  <input
                    type="password"
                    class="floating_input"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    for="input_password"
                    class="floating_label"
                    data-content="PASSWORD"
                  >
                    <span class="hidden--visually">PASSWORD</span>
                  </label>
                </div>

                <button
                  type="button"
                  class="button"
                  id="login_btn"
                  onClick={handleLogin}
                >
                  PROCEED
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RulesModal
      HandleAccept={HandleAccept}
        rulesModal={rulesModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default Login;
