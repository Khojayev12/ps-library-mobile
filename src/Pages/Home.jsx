import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import Lupa from "../Icons/lupa.svg";
import XMark from "../Icons/xmark.svg";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import { useState, useEffect } from "react";
import api from "../api";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SearchResult from "../Components/SearchResult";

export default function Home(props) {
  const [searchVaule, setSearchValue] = useState("");
  const [isResultOpen, setIsResultOpen] = useState(false)
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

  const uzunliq = (string)=>{
    if(string.length>10){
      return string.slice(0, 13) + "..."
    } else{
      return string
    }
  }
  const JanrSolo = (props) => {
    return <div className="janr-solo">{uzunliq(props.text)}</div>;
  };
  return (
    <div className="home">
      <LanguageContext.Consumer>
        {(lang) => (
          <div>
            <div className="searchbar">
              <img src={Lupa} className="inline-icons" alt="" />
              <input className="search" placeholder={lang.qidirish} onChange={handleSearch} onFocus={()=>{props.setIsSearchActive(true)}} />
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
                {genres.map((genre) => (
                  <JanrSolo key={genre} text={genre} />
                ))}
              </Box>
              <div
                className={
                  props.isSearchActive
                    ? "searchBar searchA"
                    : "searchBar searchN"
                }
                style={isResultOpen?{position:"fixed", top:"0px", left:"0px", zIndex:300, height:"100vh", borderRadius:"0px"}:{}}
              >
                {books.map((book) => (
                    <SearchResult key={book._id} book={book} isResultOpen={isResultOpen} setIsResultOpen={setIsResultOpen} />
                  ))}
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