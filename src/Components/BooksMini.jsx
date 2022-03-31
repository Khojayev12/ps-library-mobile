import { Box } from "@mui/system";
import { useState } from "react";
import Book from "./Book";

export default function BookMini(props) {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const name = props.lang.code==='uz'? props.book.nameUZ: props.book.name
  const author = props.lang.code==='uz'? props.book.authorUZ: props.book.author
  const close = () => {
    setIsBookOpen(false);
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100px",
          display: "inline-block",
          marginLeft: "18px",
          marginRight: "0px",
          marginTop: "18px",
          padding: "0px",
          zIndex: isBookOpen ? "100" : "160",
        }}
        onClick={() => {
          setIsBookOpen(!isBookOpen);
        }}
      >
        <div className="kitob-card-img-container">
          <img
            src={props.book.image}
            className="kitob-card-img"
            alt=""
            style={{ zIndex: isBookOpen ? "100" : "160" }}
          />
        </div>
        <span
          className="kitob-card-head"
          style={{ zIndex: isBookOpen ? "100" : "160" }}
        >
          {" "}
          {name?.length > 10
            ? name?.slice(0, 10) + "..."
            : name}{" "}
        </span>
        <span
          className="kitob-card-footer"
          style={{ zIndex: isBookOpen ? "100" : "160" }}
        >
          {" "}
          
          {author?.length > 10
            ? author?.slice(0, 10) + "..."
            : author}{" "}
        </span>
      </Box>
      <Book func={close} state={isBookOpen} book={props.book} />
    </>
  );
}