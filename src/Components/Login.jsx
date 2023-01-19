import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL, socket } from "../Baseurl";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [err, setErr] = useState({
    teamNameError: false,
    passwordError: false,
  });
  const [res, setRes] = useState(false);
  const nav = useNavigate();

  const validator = () => {
    let isErr = true;
    let errors = {
      teamNameError: false,
      passwordError: false,
    };
    if (teamName === "") {
      errors.teamNameError = true;
      setRes(false);

      isErr = false;
    }

    if (password === "") {
      errors.passwordError = true;
      setRes(false);

      isErr = false;
    }

    setErr(errors);

    return isErr;
  };

  const handleLogin = () => {
    setRes(true);
    if (!isGameStarted) {
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
            setRes(false);
            nav("/home");
          })
          .catch((error) => {
            console.log(error);
            setRes(false);
            toast.error(error.response.data.message);
          });
      }
    } else {
      setRes(false);
      toast.error("Sorry! Game Is Already Started");
    }
  };

  useEffect(() => {
    setIsGameStarted(false);
    if (localStorage.getItem("SEG_RULES_ACEEPT")) {
      nav("/Home");
    }

    socket.on("day", (data) => {
      console.log(data, "day");
      if (data.day > 0) {
        setIsGameStarted(true);
      }
    });
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
                    onChange={(e) => {
                      setErr({
                        ...err,
                        passwordError: false,
                      });
                      setPassword(e.target.value);
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
                  {res === false ? "LOG IN" : "Loading..."}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
