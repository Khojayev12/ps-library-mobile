import Xmark from "../Icons/xmark.svg";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { LanguageContext } from "../LanguageContext";
import PDFviewer from "./PDFviewer";

export default function Book(props) {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const MenuButton = styled(Button)((filled) => ({
    textAlign: "center",
    padding: "5px 34px",
    width: "200px",
    height: "30px",
    marginLeft: "50px",
    marginTop: "16px",
    marginBottom: "22px",
    background: "#E2E2E2",
    color: "rgb(52, 78, 90)",
    borderRadius: "5px",
    display: "inline-block",
    textTransform: "none",
  }));
  const NavbatgaYozilish = styled(Button)(() => ({
    width: "calc(100% - 68px)",
    height: "62px",
    marginLeft: "34px",
    paddingTop: "15px",
    paddingBottom: "15px",
    zIndex: "16px",
    position: "absolute",
    bottom: "25px",
    background: "linear-gradient(90deg, #548CA8 0%, #476072 100%);",
    borderRadius: "13px",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "25px",
    color: " #EEEEEE",
    textAlign: "center",
    textTransform: "none",
    "&:active": {
      backgroundColor: "rgb(214, 214, 214)",
      outline: "none",
      border: "none",
    },
  }));
  return (
    <LanguageContext.Consumer>
      {(lang) => (
        <>
          <div
            className={
              props.state
                ? "book-menu book-active"
                : " book-menu book-not-active"
            }
          >
            <img
              src={Xmark}
              alt=""
              className="book-xmark"
              onClick={props.func}
            />
            {props.isAvailable ? (
              <span className="mavjud">{lang.Mavjud}</span>
            ) : (
              <span className="mavjud-emas">{lang.MavjudEmas}</span>
            )}
            <div className="book-mini-div">
              <img src={props.book.image} alt="" className="book-big" />
              <div className="book-name-head">
                {lang.code === 'uz' ? props.book.nameUZ : props.book.name}{" "}
              </div>
              <div className="book-name-author">
                {" "}
                {lang.code === 'uz' ? props.book.authorUZ : props.book.author}{" "}
              </div>
              <br />
              <MenuButton>{props.book.genre}</MenuButton>
              <p href="#"
                download
                className="download-link"
                onClick={() => {
                  setIsPdfOpen(true);
                }}
              >
                PDF
              </p>
              <div className="book-about-it">
                {
                  lang.code === 'uz' ? props.book.descriptionUZ : props.book.description
                }
              </div>
              <br />
              <br />
              <br />
            </div>
            <div className="book-navbat">
              <NavbatgaYozilish>{lang.navbaty}</NavbatgaYozilish>
            </div>
          </div>
          {isPdfOpen ? (
            <>
              <PDFviewer
                name={lang.code === 'uz' ? props.book.nameUZ : props.book.name}
                state={isPdfOpen}
                setState={setIsPdfOpen}
                urlPDF={props.book.pdf}
              />
            </>
          ) : (
            <></>
          )}
          <div
            className={
              props.state ? "book-bg book-active" : " book-bg book-not-active"
            }
            style={{ backgroundColor: props.Col, borderRadius: "0px" }}
            onClick={props.func}
          ></div>
        </>
      )}
    </LanguageContext.Consumer>
  );
}
