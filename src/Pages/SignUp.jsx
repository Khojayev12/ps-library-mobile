import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { LanguageContext } from "../LanguageContext";
import { styled } from "@mui/material/styles";
import IconBtn from "../Components/IconBtn";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function SignUp() {
  const [isHidden, setIsHidden] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await api.post("/users/register", {
      name,
      email,
      password,
    });
    if (response.status === 201) {
      const loginRes = await api.post("/users/login", {
        email,
        password,
      });
      if (loginRes.status === 200) {
        let userStr = JSON.stringify(response.data);
        localStorage.setItem("user", userStr);
        localStorage.setItem('token', loginRes.data);
        navigate('/');
      }
    }
  };

  const RegBtn = styled(Button)(() => ({
    width: "calc(100% - 68px)",
    height: "62px",
    marginLeft: "34px",
    paddingTop: "15px",
    paddingBottom: "15px",
    position: "absolute",
    top: "599px",
    zIndex: "16px",
    background: "linear-gradient(90deg, #1D62F0 0%, #1AD5FD 100%)",
    borderRadius: "13px",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "25px",
    color: "#ffffff",
    textAlign: "center",
    textTransform: "none",
    "&:active": {
      backgroundColor: "rgb(214, 214, 214)",
      outline: "none",
      border: "none",
    },
  }));
  const [selectedInput, setSelectedInput] = useState("");
  return (
    <Box component="div" className="register-page">
      <LanguageContext.Consumer>
        {(lang) => (
          <>
            <Link to="/start">
              {" "}
              <Box component="div" className="back-icon">
                <IconBtn />
              </Box>
            </Link>
            <span className="reg-header"> {lang.register} </span>
            <span className="reg-info" style={{ top: "216px" }}>
              {" "}
              {lang.nameSurname}{" "}
            </span>
            <div
              className="gradient-border"
              style={{
                top: "246px",
                display: selectedInput == "name" ? "block" : "none",
              }}
            ></div>
            <input
              className="input-name"
              placeholder={lang.enterName}
              style={{ top: "248px" }}
              onFocus={() => {
                setSelectedInput("name");
              }}
              onChange={e => setName(e.target.value)}
            />

            <span className="reg-info" style={{ top: "332px" }}>
              {" "}
              Email{" "}
            </span>
            <div
              className="gradient-border"
              style={{
                top: "362px",
                display: selectedInput == "email" ? "block" : "none",
              }}
            ></div>
            <input
              className="input-name"
              placeholder={lang.enterEmail}
              style={{ top: "364px" }}
              onFocus={() => {
                setSelectedInput("email");
              }}
              onChange={e => setEmail(e.target.value)}
            />

            <span className="reg-info" style={{ top: "451px" }}>
              {" "}
              {lang.parol}{" "}
            </span>
            <div
              className="gradient-border"
              style={{
                top: "481px",
                display: selectedInput == "password" ? "block" : "none",
              }}
            ></div>
            <input
              className="input-name"
              placeholder={lang.enterParol}
              style={{ top: "483px" }}
              type={isHidden ? "password" : "text"}
              onFocus={() => {
                setSelectedInput("password");
              }}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="hide-icon">
              {isHidden ? (
                <AiFillEye
                  onClick={() => {
                    setIsHidden(!isHidden);
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    setIsHidden(!isHidden);
                  }}
                />
              )}
            </span>

            <RegBtn onClick={handleRegister}> {lang.signup} </RegBtn>

            <span className="under-reg"> {lang.alreadyRegisteres} </span>
            <Link
              to="/login"
              style={{ color: "unset", textDecoration: "none" }}
            >
              <span
                className="under-reg"
                style={{ top: "710px", color: "rgb(84, 140, 168" }}
              >
                {" "}
                {lang.goLogin}{" "}
              </span>
            </Link>
          </>
        )}
      </LanguageContext.Consumer>
    </Box>
  );
}
