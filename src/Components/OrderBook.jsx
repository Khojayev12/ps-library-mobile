import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Book from "./Book";
import { useEffect, useState } from "react";
import api from "../api";
import { languages } from "../LanguageContext";
import { uz } from "../App";

export default function OrderBook(props) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api.get("/books/" + props.order.bookId);
      if (response.status === 200) {
        setBook(response.data);
      }
    })();
  }, [props.order.bookId]);

  const BookBtnOrder = styled(Button)(() => ({
    padding: "15px 0px",
    width: "150px",
    height: "20px",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "none",
    color: "#EEEEEE",
    background: "linear-gradient(90deg, #548CA8 0%, #476072 100%)",
    borderRadius: "3px",
    margin: "2px 15px",
  }));
  const [isBookOpen, setIsBookOpen] = useState(false);
  const close = () => {
    setIsBookOpen(false);
  };
  return (
    <div className="order-component">
      {book && (
        <>
          <div className="order-img">
            <img src={book.image} alt="" className="order-book-img" />
          </div>
          <div className="order-book-text">
            <div className="order-book-name">
              {" "}
              {props.lang === "uz" ? book.nameUZ : book.name}{" "}
            </div>
            <div className="order-book-author">
              {" "}
              {props.lang === "uz" ? book.authorUZ : book.author}{" "}
            </div>
            <span className="order-book-date">
              {props.lang === "uz" ? "Oxirgi muddat" : "Until date"}:{" "}
              {new Date(props.order.until).toLocaleDateString()}{" "}
            </span>
            <span className="order-book-status">
              {" "}
              Status:{" "}
              <span style={{ color: props.stColor }}>
                {" "}
                {props.order.isAccepted
                  ? props.lang === "uz"
                    ? "Qabul qilingan"
                    : "Accepted"
                  : props.order.isCancelled
                  ? props.lang === "uz"
                    ? "Bekor qilingan"
                    : "Cancelled"
                  : props.lang === "uz"
                  ? "Yuborilgan"
                  : "Ordered"}{" "}
              </span>{" "}
            </span>
            <BookBtnOrder
              onClick={() => {
                setIsBookOpen(!isBookOpen);
              }}
            >
              {" "}
              {props.lang === "uz" ? "Kitob haqida" : "About this book"}{" "}
            </BookBtnOrder>
          </div>
          <Book book={book} func={close} state={isBookOpen} />
        </>
      )}
    </div>
  );
}
