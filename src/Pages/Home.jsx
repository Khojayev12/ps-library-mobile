import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import Lupa from '../Icons/lupa.svg'
import { Box } from "@mui/system";
import BookMini from "../Components/BooksMini";

export default function Home() {

    const JanrSolo = (props)=>{
        return(
        <div className="janr-solo">{props.text}</div>
        )
    }
    return(
        <div className="home">
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <div className='searchbar'>
                            <img src={Lupa} className="inline-icons" alt="" />
                            <input className='search' placeholder={lang.qidirish} />
                            <span className="janrla">{lang.janrla}</span>
                            <Box component="div" className="janrla-div">
                                <JanrSolo text="hello"/>
                                <JanrSolo text="iseurguierg"/>
                                <JanrSolo text="helseiubielo"/>
                            </Box>
                            <Box component="div" className="janrla-div" sx={{top:"250px"}} >
                                <JanrSolo text="iseurguierg"/>
                                <JanrSolo text="hello"/>
                                <JanrSolo text="helseiubielo"/>
                            </Box>
                            <Box component="div" className="janrla-div" sx={{top:"290px"}} >
                                <JanrSolo text="hello"/>
                                <JanrSolo text="iseurguierg"/>
                                <JanrSolo text="helseiubielo"/>
                            </Box>
                            <Box component="div" className="ContentHome">
                                <span className="kitob-all"> {lang.kitoblar} </span>
                                <Link to="/all-books" className="Mylink"> <span className="see-all" > {lang.seeAll} </span></Link>
                                <div style={{marginTop:"26px", width:"100%"}} >
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                    <BookMini Name={lang.book1} Author={lang.book12} />
                                </div>
                            </Box>
                        </div>
                    </div>
                )}
            </LanguageContext.Consumer>
        </div>
    )
}