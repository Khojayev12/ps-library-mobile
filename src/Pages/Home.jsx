import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import Lupa from "../Icons/lupa.svg";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import { useState, useEffect } from "react";
import api from "../api";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SearchResult from "../Components/SearchResult";

export default function Home() {
  const [searchVaule, setSearchValue] = useState("");
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  
  props.isSearchActive
    ? disableBodyScroll(document)
    : enableBodyScroll(document);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const booksRes = await api.get("/books");
      if (booksRes.status === 200) {
        setBooks(booksRes.data?.slice(0, 6));
      }

      const genresRes = await api.get("/genres");
      if (genresRes.status === 200) {
        setGenres(genresRes.data);
      }
    })();
  }, []);

  const JanrSolo = (props) => {
    return <div className="janr-solo">{props.text}</div>;
  };
  return (
    <div className="home">
      <LanguageContext.Consumer>
        {(lang) => (
          <div>
            <div className="searchbar">
              <img src={Lupa} className="inline-icons" alt="" />
              <input className="search" placeholder={lang.qidirish} />
              <span className="janrla">{lang.janrla}</span>
              <Box component="div" className="janrla-div">
                {genres.map((genre) => (
                  <JanrSolo key={genre} text={genre} />
                ))}
              </Box>
              <Box component="div" className="ContentHome">
                <span className="kitob-all"> {lang.kitoblar} </span>
                <Link to="/all-books" className="Mylink">
                  {" "}
                  <span className="see-all"> {lang.seeAll} </span>
                </Link>
                <div style={{ marginTop: "26px", width: "100%" }}>
                  {books.map((book) => (
                    <BookMini key={book._id} book={book} />
                  ))}
                </div>
              </Box>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}
