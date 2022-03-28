import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import IconBtn from "../Components/IconBtn";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import Poisk from "../Icons/poisk.svg";
import FilePDF2 from "../file3.pdf";
import axios from "axios";
import { useEffect, useState } from "react";

const list = [
  {
    _id: "612bc80557004f00161bb780",
    bookID: "bqzki",
    name: "SOS! Savol ortidagi savol",
    author: "Jon G.Miller",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/3a6bd36b87969b8a45d9a8119004e2642021070314513477239wMCv8paWCs.jpg",
    genre: "shaxsiy-rivojlanish",
    isAvailable: false,
    dateCreated: "2021-08-29T17:46:45.322Z",
  },
  {
    _id: "612bc86e57004f00161bb781",
    bookID: "mgv6n",
    name: "Diqqat: Chalg'ituvchi dunyoda muvaffaqqiyat sirlari",
    author: "Kel Nyuport",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/4751bc16533e6938e275b323e13ec0d12021081613125382963pYMLoD2A2Q.jpg",
    genre: "shaxsiy-rivojlanish",
    isAvailable: true,
    dateCreated: "2021-08-29T17:48:30.436Z",
  },
  {
    _id: "612bc8ff57004f00161bb782",
    bookID: "mtq23",
    name: "Stiv Jobs",
    author: "Uolter Ayzekson",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/62afaf4f661699d406da07f417694ab02020090113252448908XTd2lc78nx.jpg",
    genre: "biografiya",
    isAvailable: true,
    dateCreated: "2021-08-29T17:50:55.448Z",
  },
  {
    _id: "612bc99857004f00161bb783",
    bookID: "akgc2",
    name: "O'lsang kim yig'laydi?",
    author: "Robin Sharma",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/e0f48988114ada340782b2354c906ebc2020120916245217810L3SDzL9FOP.jpg",
    genre: "falsafa",
    isAvailable: true,
    dateCreated: "2021-08-29T17:53:28.433Z",
  },
  {
    _id: "612bc9c957004f00161bb784",
    bookID: "zgypm",
    name: "1984",
    author: "Jorj Oruell",
    image: "https://assets.asaxiy.uz/product/items/desktop/5e15bf1a7128c.jpg",
    genre: "falsafa",
    isAvailable: true,
    dateCreated: "2021-08-29T17:54:17.612Z",
  },
  {
    _id: "612bca1957004f00161bb785",
    bookID: "icxpe",
    name: "Molxona",
    author: "Jorj Oruell",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/102cfe87d35b18bbeaada4277c91b771202001151831196901073kdi0ns6y.jpg",
    genre: "falsafa",
    isAvailable: true,
    dateCreated: "2021-08-29T17:55:37.158Z",
  },
  {
    _id: "612bcdc357004f00161bb78a",
    bookID: "51yal",
    name: "Samaradorlikning 21 yo'li",
    author: "Brayn Treysi",
    image:
      "https://assets.asaxiy.uz/product/main_image/webp/desktop//5e5f5459417c4.webp",
    genre: "shaxsiy-rivojlanish",
    isAvailable: true,
    dateCreated: "2021-08-29T18:11:15.615Z",
  },
  {
    _id: "612bcea557004f00161bb78c",
    bookID: "e_wjs",
    name: "Jinoyat va jazo",
    author: "Fyodr Dostoevskiy",
    image: "https://assets.asaxiy.uz/product/items/desktop/5e15c072c2d89.jpg",
    genre: "falsafa",
    isAvailable: true,
    dateCreated: "2021-08-29T18:15:01.787Z",
  },
  {
    _id: "612bd72157004f00161bb790",
    bookID: "h5uhi",
    name: "Beparvolikning nozik san'ati",
    author: "Mark Menson",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/406b03d74c9e46f2989438f42294f0cd2020090113145961285Mib8P9ZQKr.jpg",
    genre: "shaxsiy-rivojlanish",
    isAvailable: true,
    dateCreated: "2021-08-29T18:51:13.986Z",
  },
  {
    _id: "612bd7a857004f00161bb791",
    bookID: "qnreq",
    name: "Boy ota, kambag'al ota",
    author: "Robert Kiyosaki",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/23af4e005726f6b4852157fd30cd327c2021021016164681605SXUEy8Xzph.jpg",
    genre: "biznes",
    isAvailable: true,
    dateCreated: "2021-08-29T18:53:28.849Z",
  },
  {
    _id: "612bd90c57004f00161bb792",
    bookID: "novty",
    name: "Ilon Mask. Tesla, SpaceX va kelajak sari yo'l",
    author: "Eshli Vans",
    image: "https://assets.asaxiy.uz/product/items/desktop/5e15bdfd069ed.jpg",
    genre: "biznes",
    isAvailable: false,
    dateCreated: "2021-08-29T18:59:24.848Z",
  },
  {
    _id: "612bdb8157004f00161bb796",
    bookID: "h18q3",
    name: "Alkimyogar",
    author: "Paulo Koelo",
    image:
      "https://assets.asaxiy.uz/product/items/desktop/6befb91f9d32f72a3aa9e7747fabf8eb202004071547318539996LhiDx1q6.jpg",
    genre: "roman",
    isAvailable: true,
    dateCreated: "2021-08-29T19:09:53.861Z",
  },
  {
    _id: "620fd552a4be918c90981dfd",
    bookID: "smqgw",
    name: "Nimadir",
    author: "zo'r",
    image: "https://telegram.im/img/evosdeliverybot",
    pdf: "http://turin.uz/wp-content/uploads/2017/04/adabiyot-III.pdf",
    genre: "komediya",
    isAvailable: true,
    dateCreated: "2022-02-18T17:20:18.662Z",
  },
  {
    _id: "62135be4a4be918c90981dfe",
    bookID: "stpn8",
    name: "Gentra 1.5",
    author: "Rasul",
    image:
      "https://avto-russia.ru/autos/daewoo/photo/daewoo_gentra_1024x768.jpg",
    pdf: "",
    genre: "romantika",
    isAvailable: true,
    dateCreated: "2022-02-21T09:31:15.907Z",
  },
];

export default function Books(props) {
  const [books, setBooks] = useState([]);
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
        setBooks(res.data);
      });
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
          <div className="for-scroll" style={{ marginTop: "4px" }}>
            {books.map((kitob) => {
              return (
                <BookMini
                  Name={kitob.name}
                  Author={kitob.author}
                  file={kitob.pdf}
                  genre={kitob.genre}
                  key={kitob._id}
                  img={kitob.image}
                  isAvailable={kitob.isAvailable}
                  dateCreated={kitob.dateCreated}
                />
              );
            })}
          </div>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}
