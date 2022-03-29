import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import IconBtn from "../Components/IconBtn";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import Poisk from "../Icons/poisk.svg";
import { useEffect, useState } from "react";
import api from "../api";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/books");
      if (response.status === 200) {
        setBooks(response.data);
        console.log(response);
      }
    })();
  }, []);
  return (
    <LanguageContext.Consumer>
      {(lang) => (
        <div className="books-page">
          <Link to="/">
            {" "}
            <Box
              component="div"
              className="back-icon"
              style={{ top: "24px" }}
              id="back-icon-link"
            >
              <IconBtn />
            </Box>
          </Link>
          <span className="books-header">{lang.kitoblar}</span>
          <Link to="/" className="Mylink">
            <img src={Poisk} alt="" className="search-icon" />
          </Link>
          <div className="for-scroll" style={{ marginTop: "44px" }}>
            {books.map((book) => (
              <BookMini key={book._id} book={book} />
            ))}
          </div>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}
