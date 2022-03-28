import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import Lupa from "../Icons/lupa.svg";
import XMark from "../Icons/xmark.svg";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import FilePDF2 from "../file3.pdf";
import { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SearchResult from "../Components/SearchResult";

export default function Home(props) {
  const [searchVaule, setSearchValue] = useState("");
  const [books, setBooks] = useState([]);
  props.isSearchActive
    ? disableBodyScroll(document)
    : enableBodyScroll(document);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const api = props.api;

  useEffect(() => {
    api
      .get("/books", {
        method: "HEAD",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBooks(res.data.slice(0, 6));
      });
  }, []);

  const JanrSolo = (props) => {
    return <div className="janr-solo">{props.text}</div>;
  };
  return (
    <div className="home">
      <LanguageContext.Consumer>
        {(lang) => (
          <div onClick={props.LMniOchir}>
            <div
              className={props.isSearchActive ? "searchbar" : "searchbar "}
              onChange={handleSearch}
              onFocus={() => {
                props.setIsSearchActive(true);
              }}
            >
              <img src={Lupa} className="inline-icons" alt="" />
              <input
                className={
                  props.isSearchActive ? "search with-shadov " : "search"
                }
                placeholder={lang.qidirish}
              />
              <img
                src={XMark}
                className="search-closer-icon"
                alt=""
                onClick={() => {
                  props.setIsSearchActive(false);
                }}
                style={{ display: props.isSearchActive ? "block" : "none" }}
              />
              <span className="janrla">{lang.janrla}</span>
              <Box component="div" className="janrla-div">
                <JanrSolo text="hello" />
                <JanrSolo text="iseurguierg" />
                <JanrSolo text="helseiubielo" />
              </Box>
              <Box component="div" className="janrla-div" sx={{ top: "250px" }}>
                <JanrSolo text="iseurguierg" />
                <JanrSolo text="hello" />
                <JanrSolo text="helseiubielo" />
              </Box>
              <Box component="div" className="janrla-div" sx={{ top: "290px" }}>
                <JanrSolo text="hello" />
                <JanrSolo text="iseurguierg" />
                <JanrSolo text="helseiubielo" />
              </Box>
              <div
                className={
                  props.isSearchActive
                    ? "searchBar searchA"
                    : "searchBar searchN"
                }
              >
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="1984" />
                <SearchResult text="kajerfvakuyev" />
                <div style={{ marginBottom: "20vh" }}></div>
              </div>
              <Box component="div" className="ContentHome">
                <span className="kitob-all"> {lang.kitoblar} </span>
                <Link to="/all-books" className="Mylink">
                  {" "}
                  <span className="see-all"> {lang.seeAll} </span>
                </Link>
                <div style={{ marginTop: "26px", width: "100%" }}>
                  {books.map((book) => (
                    <BookMini
                      key={book._id}
                      Name={book.name}
                      genre={book.genre}
                      Author={book.author}
                      img={book.image}
                      file={book.pdf}
                    />
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
