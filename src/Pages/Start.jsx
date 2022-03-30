import { LanguageContext } from "../LanguageContext";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import BackImg from "../Media/Intro.jpg";
import { styled } from "@mui/material/styles";
import Avatar from "../Icons/avatar.png";
import { Link } from "react-router-dom";

export default function Start() {
  const RegBtn = styled(Button)(() => ({
    width: "calc(100vw - 68px)",
    left: "34px",
    paddingTop: "15px",
    paddingBottom: "15px",
    position: "fixed",
    top: "50vh",
    zIndex: "101",
    padding: "15px 92px",
    height: "57px",
    background: "rgba(227, 227, 227, 0.4)",
    border: " 2px solid #FFFFFF",
    boxSizing: "border-box",
    backdropFilter: "blur(20px)",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "25px",
    color: "white",
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: "15px",
    textAlign: "center",
    textTransform: "none",
    "&:active": {
      outline: "none",
      border: "none",
      background: "rgba(227, 227, 227, 0.4)",
      boxSizing: "border-box",
      backdropFilter: "blur(20px)",
    },
    "&:focus": {
      outline: "none",
      border: "none",
      background: "rgba(227, 227, 227, 0.4)",
      boxSizing: "border-box",
      backdropFilter: "blur(20px)",
    },
  }));

  const Kirish = styled(Button)(() => ({
    width: "calc(100vw - 68px)",
    height: "62px",
    left: "34px",
    paddingTop: "15px",
    paddingBottom: "15px",
    position: "fixed",
    top: "calc(50vh + 100px)",
    zIndex: "101",
    background: "#DCD0CC",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "25px",
    color: "#8E5B4D",
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: "15px",
    textAlign: "center",
    textTransform: "none",
    "&:active": {
      outline: "none",
      border: "none",
      background: "#DCD0CC",
    },
    "&:focus": {
      outline: "none",
      border: "none",
      background: "#DCD0CC",
    },
  }));
  return (
    <LanguageContext.Consumer>
      {(lang) => (
        <Box component="div" className="intro-page">
          <div className="centerer">
            <img src={BackImg} alt="" className="intro-bg" />
          </div>
          <div className="intro-div-header">
            <img src={Avatar} alt="" className="intro-logo" />
            <span className="intro-header"> {lang.menuHeader} </span>
            <span className="intro-shior"> {lang.shior} </span>
          </div>

          <Link
            to="/register"
            style={{ color: "unset", textDecoration: "none" }}
          >
            {" "}
            <RegBtn> {lang.register} </RegBtn>{" "}
          </Link>
          <Link to="/login" style={{ color: "unset", textDecoration: "none" }}>
            <Kirish> {lang.enter} </Kirish>
          </Link>
        </Box>
      )}
    </LanguageContext.Consumer>
  );
}
