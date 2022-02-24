import { LanguageContext } from "../LanguageContext";
import {Link} from "react-router-dom"
import IconBtn from "../Components/IconBtn";
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";
import Poisk from "../Icons/poisk.svg"

export default function Books(){
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="books-page" >
                    <Link to="/"> <Box component="div" className="back-icon" style={{top:"24px"}} id="back-icon-link" >
                        <IconBtn />
                    </Box></Link>
                    <span className="books-header">{lang.kitoblar}</span>
                    <Link to="/" className="Mylink" >
                        <img src={Poisk} alt="" className="search-icon"/>
                    </Link>
                    <div className="for-scroll" style={{marginTop:"44px"}}>
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                        <BookMini Name={lang.book1} Author={lang.book12} />
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}