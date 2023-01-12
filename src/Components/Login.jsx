import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RulesModal from "./RulesModal";
import { SERVER_URL } from "../Baseurl";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    teamNameError: false,
    passwordError: false,
   });
  const nav = useNavigate();

  const validator = () => {
    let isErr = true;
    let errors = {
      teamNameError: false,
    passwordError: false,
    }
    if (teamName === "") {
      errors.teamNameError = true
      isErr = false;
    }

    if (password === "") {
      errors.passwordError = true;
      isErr = false;
    }

    setErr(errors);

    return isErr;
  };

  const handleLogin = () => {
    console.log(err);
    if (validator()) {
      axios({
        method: "post",
        url: `${SERVER_URL}api/main/login`,
        headers: {},
        data: {
          username: teamName,
          password: password,
        },
      })
        .then((response) => {
          toast.success(response.data.message);
          localStorage.setItem("SEG_TEAM_ID", response.data.data.id);
          setRulesModal(true);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    }
  };

  const [error, setError] = useState("");
  const validate = () => {
    let isvalid = true;
    if (!teamName) {
      setError("Please Enter TeamID");
      isvalid = false;
    }
    return isvalid;
  };

  const closeModal = () => {
    setRulesModal(false);
  };

  const HandleAccept = () => {
    localStorage.setItem("SEG_RULES_ACEEPT", true);
    nav("/Home");
  };

  useEffect(() => {
    if (localStorage.getItem("SEG_RULES_ACEEPT")) {
      nav("/Home");
    }
  }, []);

  return (
    <>
      <div class="backdesign"></div>
      <div class="container inner_container">
        <div class="row">
          <div class="col-md-7">
            {/* <h1>THE FINSHARP LOGIN</h1> */}
            <img
              src="../assets/Login illustrator.png"
              alt="Login illustrator"
              class="login_illu"
            />
          </div>
          <div class="col-md-5 m-auto">
            <div class="form">
              <p class="log_title">Log In</p>
              <p class="log_desc">Login to The Fin Sharp</p>

              <form action="">
                <div class="floating mt-5 m-0">
                  <input
                    class="floating_input"
                    name="username"
                    type="text"
                    placeholder="Team ID"
                    value={teamName}
                    onChange={(e) => {
                      setErr({
                        ...err,
                        teamNameError: false,
                      });
                      setTeamName(e.target.value);
                    }}
                  />
                  <label
                    for="input_teamName"
                    class="floating_label"
                    data-content="TEAM NAME"
                  >
                    <span class="hidden--visually">TEAM NAME</span>
                  </label>
                </div>
                <p className="error-text">
                  {err.teamNameError ? "Team name can't be empty!" : ""}
                </p>

                <div class="floating mt-4 m-0">
                  <input
                    type="password"
                    class="floating_input"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>{
                      setErr({
                        ...err,
                        passwordError: false,
                      });
                       setPassword(e.target.value)
                    }}
                  />
                  <label
                    for="input_password"
                    class="floating_label"
                    data-content="PASSWORD"
                  >
                    <span class="hidden--visually">PASSWORD</span>
                  </label>
                </div>
                <p className="error-text">
                  {err.passwordError ? "Password can't be empty!" : ""}
                </p>

                <button
                  type="button"
                  class="button"
                  id="login_btn"
                  onClick={handleLogin}
                >
                  LOG IN
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
