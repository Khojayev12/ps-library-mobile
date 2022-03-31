import { Box } from "@mui/system";
import { ThemeContext } from "@react-pdf-viewer/core";
import { useState } from "react";
import Book from "./Book";
import uz from "../App"

export default function BookMini(props) {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [name, setName] = useState("")
  const [author, setAuthor] = useState('')
  const close = () => {
    setIsBookOpen(false);
  };
  return (
    <ThemeContext.Consumer>
      {lang =>(<>
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
        </div>{setName(lang===uz? props.book.nameUZ: props.book.name)}
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
          
          {setAuthor(lang===uz? props.book.authorUZ: props.book.author)}
          {author?.length > 10
            ? author?.slice(0, 10) + "..."
            : author}{" "}
        </span>
      </Box>
      <Book func={close} state={isBookOpen} book={props.book} /> </>)}
    </ThemeContext.Consumer>
  );
}