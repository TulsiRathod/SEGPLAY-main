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

  const HandleAccept = (checkBox) => {
    if(checkBox){
    localStorage.setItem("SEG_RULES_ACEEPT", true);
    nav("/Home");
    }else{
      toast.error('Please check Terms & Condition!');
    }
  };

  useEffect(() => {
    if (localStorage.getItem("SEG_RULES_ACEEPT")) {
      nav("/Home");
    }
  }, []);

  return (
    <>
      <div className="backdesign"></div>
      <div className="container inner_container">
        <div className="row">
          <div className="col-md-7">
            {/* <h1>THE FINSHARP LOGIN</h1> */}
            <img
              src="../assets/Login illustrator.png"
              alt="Login illustrator"
              className="login_illu"
            />
          </div>
          <div className="col-md-5 m-auto">
            <div className="form">
              <p className="log_title">Log In</p>
              <p className="log_desc">Login to The Fin Sharp</p>

              <form action="">
                <div className="floating mt-5 m-0">
                  <input
                    className="floating_input"
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
                    className="floating_label"
                    data-content="TEAM NAME"
                  >
                    <span className="hidden--visually">TEAM NAME</span>
                  </label>
                </div>
                <p className="error-text">
                  {err.teamNameError ? "Team name can't be empty!" : ""}
                </p>

                <div className="floating mt-4 m-0">
                  <input
                    type="password"
                    className="floating_input"
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
                    className="floating_label"
                    data-content="PASSWORD"
                  >
                    <span className="hidden--visually">PASSWORD</span>
                  </label>
                </div>
                <p className="error-text">
                  {err.passwordError ? "Password can't be empty!" : ""}
                </p>

                <button
                  type="button"
                  className="button"
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
